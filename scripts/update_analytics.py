#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re

TAG_SNIPPET = """<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SBX47RYV5J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SBX47RYV5J');
</script>
"""

def update_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    changed = False

    # 1. Eski G-TEQ6956NTV kodunu G-SBX47RYV5J ile değiştir
    if 'G-TEQ6956NTV' in content:
        content = content.replace('G-TEQ6956NTV', 'G-SBX47RYV5J')
        changed = True

    # 2. Eğer dosyada gtag yoksa <head> etiketinin arkasına ekle
    if 'G-SBX47RYV5J' not in content and 'googletagmanager.com' not in content:
        head_match = re.search(r'(<head[^>]*>)', content, re.IGNORECASE)
        if head_match:
            head_tag = head_match.group(1)
            content = content.replace(head_tag, head_tag + '\n' + TAG_SNIPPET, 1)
            changed = True

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    target_dir = 'public'
    updated_count = 0
    total_count = 0

    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.endswith('.html'):
                total_count += 1
                filepath = os.path.join(root, file)
                if update_html_file(filepath):
                    updated_count += 1

    print(f"Total HTML files in {target_dir}: {total_count}")
    print(f"Updated HTML files: {updated_count}")

if __name__ == '__main__':
    main()
