#!/usr/bin/env python3
"""
Humanizer Physical Audit Engine ($10M Mandate v9.2 - G20/MG23)
Based on Wikipedia Signs of AI Writing (26 Patterns) & Natural Human Prose
Supports both English and Turkish AI writing tells.
"""

import sys
import os
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
        "regex": r"\b(delve|tapestry|beacon|testament|pivotal|seamlessly|game-changer|unleash|büyüleyici|çığır\s+açan|kusursuz|doruk\s+noktası|hayati\s+öneme\s+sahip|dönüm\s+noktası|derinlemesine\s+incelemek|tanıklık\s+etmek)\b",
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
            matches = list(re.finditer(pat["regex"], line, re.IGNORECASE))
            for m in matches:
                findings.append({
                    "id": pat["id"],
                    "pattern": pat["name"],
                    "matched": m.group(0),
                    "line": line_idx,
                    "level": pat["level"]
                })
                
    ai_tell_count = len(findings)
    density = (ai_tell_count / word_count * 100) if word_count > 0 else 0.0
    passed = density <= 1.5 and not any(f["level"] == "CRITICAL" for f in findings)
    
    return {
        "word_count": word_count,
        "findings": findings,
        "tell_count": ai_tell_count,
        "density_pct": round(density, 2),
        "passed": passed
    }

def main():
    parser = argparse.ArgumentParser(description="Humanizer 26 AI-Tell Scanner")
    parser.add_argument("path", help="File or directory path to scan")
    args = parser.parse_args()
    
    files_to_scan = []
    if os.path.isfile(args.path):
        files_to_scan.append(args.path)
    elif os.path.isdir(args.path):
        for root, _, files in os.walk(args.path):
            for file in files:
                if file.endswith((".md", ".txt", ".html", ".astro", ".ts")):
                    files_to_scan.append(os.path.join(root, file))
                    
    total_findings = 0
    failed_files = 0
    
    for fpath in files_to_scan:
        try:
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            res = scan_text(content)
            if not res["passed"]:
                print(f"❌ [HUMANIZER FAIL] {fpath} (Density: {res['density_pct']}%, Tells: {res['tell_count']})")
                for finding in res["findings"]:
                    print(f"   Line {finding['line']}: [{finding['level']}] {finding['pattern']} -> '{finding['matched']}'")
                failed_files += 1
                total_findings += res["tell_count"]
        except Exception as e:
            print(f"⚠️ Error reading {fpath}: {e}")
            
    if failed_files > 0:
        print(f"\n🚫 G20 Gate Failed: {failed_files} file(s) exceeded AI tell limits.")
        sys.exit(1)
    else:
        print(f"✅ G20 Pure-Human Prose Gate: {len(files_to_scan)} file(s) scanned. 0 critical AI-tells.")
        sys.exit(0)

if __name__ == "__main__":
    main()
