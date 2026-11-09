#!/usr/bin/env python3
"""
Humanizer Physical Audit Engine
Based on blader/humanizer & Wikipedia Signs of AI Writing (26 Patterns)
Supports both English and Turkish AI writing tells.
"""

import sys
import re
import argparse
from typing import List, Dict, Any

PATTERNS = [
    {
        "id": 1,
        "name": "Not X but Y",
        "regex": r"\b(not\s+just\s+[^,.]+,?\s*but\s+|sadece\s+[^,.]+\s+değil,?\s*aynı\s+zamanda|yalnızca\s+[^,.]+\s+değil|bir\s+özellik\s+değil,?\s*bir\b)",
        "level": "HIGH"
    },
    {
        "id": 2,
        "name": "One-line closers and dramatic fragments",
        "regex": r"(let\s+that\s+sink\s+in|the\s+future\s+is\s+here|and\s+that\s+changes\s+everything|bunu\s+bir\s+düşünün|gelecek\s+artık\s+burada|ve\s+bu\s+her\s+şeyi\s+değiştiriyor|işte\s+bu\s+kadar\s*!?)",
        "level": "HIGH"
    },
    {
        "id": 3,
        "name": "Sayings that sound deep",
        "regex": r"\b(at\s+its\s+core|in\s+a\s+world\s+where|özünde|temelinde\s+yatan\s+gerçek|derinliklerine\s+indiğimizde|günümüz\s+dünyasında|hızla\s+değişen\s+dünyada)\b",
        "level": "HIGH"
    },
    {
        "id": 4,
        "name": "Staged run-up before the point",
        "regex": r"\b(here'?s\s+the\s+thing|honestly\?|let'?s\s+be\s+real|açık\s+konuşmak\s+gerekirse|dürüst\s+olmak\s+gerekirse|işin\s+özü\s+şu\s+ki|şunu\s+unutmamak\s+gerekir\s+ki)\b",
        "level": "HIGH"
    },
    {
        "id": 5,
        "name": "Arguing with no one",
        "regex": r"\b(i'?m\s+not\s+saying\s+that|now,\s+you\s+might\s+be\s+wondering|yanlış\s+anlaşılmasın|şimdi\s+şunu\s+sorabilirsiniz|akıllara\s+şu\s+soru\s+gelebilir)\b",
        "level": "HIGH"
    },
    {
        "id": 8,
        "name": "Dashes as universal connector",
        "regex": r"(\s+—\s+|\s+--\s+)",
        "level": "MEDIUM"
    },
    {
        "id": 12,
        "name": "Overused AI words",
        "regex": r"\b(tapestry|delve|testament|beacon|paramount|crucial|elevate|revolutionize|pivotal|seamlessly|game-changer|unleash|büyüleyici|çığır\s+açan|kusursuz|doruk\s+noktası|hayati\s+öneme\s+sahip|dönüm\s+noktası|derinlemesine\s+incelemek|tanıklık\s+etmek)\b",
        "level": "HIGH"
    },
    {
        "id": 15,
        "name": "Shallow -ing riders",
        "regex": r"\b(reflecting|symbolizing|showcasing|underscoring|yansıtarak|simgeleyerek|gözler\s+önüne\s+sererek|vurgulayarak)\b",
        "level": "MEDIUM"
    },
    {
        "id": 16,
        "name": "Sales language / Fluff",
        "regex": r"\b(nestled\s+within|breathtaking|state-of-the-art|unparalleled|eşsiz\s+bir\s+deneyim|nefes\s+kesen|adeta\s+bir\s+başyapıt|son\s+teknoloji|benzersiz)\b",
        "level": "MEDIUM"
    },
    {
        "id": 17,
        "name": "Borrowed authority",
        "regex": r"\b(experts\s+believe|studies\s+show|research\s+suggests|uzmanlar\s+belirtiyor|araştırmalar\s+gösteriyor\s+ki|yapılan\s+çalışmalara\s+göre)\b",
        "level": "MEDIUM"
    },
    {
        "id": 19,
        "name": "Bold as decoration",
        "regex": r"(\*\*[A-ZÇĞİÖŞÜa-zçğıöşü\s]{2,25}\*\*:\s*)",
        "level": "LOW"
    },
    {
        "id": 20,
        "name": "Decorative headings with emojis",
        "regex": r"(^#+\s+.*[🚀✨🔥💡🎯📌🛡️🎉].*)",
        "level": "LOW"
    },
    {
        "id": 22,
        "name": "Chatbot residue",
        "regex": r"\b(certainly!|i\s+hope\s+this\s+helps|great\s+question|as\s+an\s+ai|harika\s+bir\s+soru|umarım\s+bu\s+yardımcı\s+olur|elbette!|tabii\s+ki!)\b",
        "level": "CRITICAL"
    }
]

def scan_text(text: str) -> Dict[str, Any]:
    lines = text.splitlines()
    word_count = len(re.findall(r"\w+", text))
    findings = []
    
    for line_idx, line in enumerate(lines, 1):
        for pat in PATTERNS:
            matches = re.finditer(pat["regex"], line, re.IGNORECASE)
            for m in matches:
                findings.append({
                    "line": line_idx,
                    "rule_id": pat["id"],
                    "rule_name": pat["name"],
                    "level": pat["level"],
                    "matched": m.group(0).strip(),
                    "snippet": line.strip()[:90]
                })
                
    density = (len(findings) / max(word_count, 1)) * 100
    
    if len(findings) == 0:
        status = "PASS (CLEAN_HUMAN)"
    elif density < 1.5:
        status = "WARN (LOW_AI_TELLS)"
    else:
        status = "FAIL (HEAVY_AI_DETECTED)"
        
    return {
        "word_count": word_count,
        "total_tells": len(findings),
        "tell_density": round(density, 2),
        "status": status,
        "findings": findings
    }

def main():
    parser = argparse.ArgumentParser(description="Humanizer 26-Pattern Audit Engine")
    parser.add_argument("target", help="Text string or path to file")
    args = parser.parse_args()
    
    try:
        with open(args.target, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception:
        content = args.target
        
    result = scan_text(content)
    
    print("\n" + "="*60)
    print("🔍 HUMANIZER PHYSICAL AUDIT REPORT (26 WIKIPEDIA RULES)")
    print("="*60)
    print(f"📊 Kelime Sayısı: {result['word_count']}")
    print(f"🚩 Yakalanan AI Tell Sayısı: {result['total_tells']}")
    print(f"📈 AI İz Yoğunluğu: %{result['tell_density']} (Eşik: %1.5)")
    print(f"🛡️ Durum: {result['status']}")
    print("-"*60)
    
    if result["findings"]:
        print("BULGULAR VE TETİKLENEN KURALLAR:")
        for idx, f in enumerate(result["findings"], 1):
            print(f"  {idx}. [Kural §{f['rule_id']}: {f['rule_name']}] (Satır {f['line']})")
            print(f"     Eşleşen: \"{f['matched']}\"")
            print(f"     Bağlam: \"{f['snippet']}\"")
    else:
        print("✅ Hiçbir yapay zeka kalıbı veya izine rastlanmadı. Metin doğal insan üslubunda.")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
