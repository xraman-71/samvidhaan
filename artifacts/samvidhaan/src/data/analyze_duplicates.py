import json
from collections import Counter

file_path = r'c:\Users\csc\Downloads\Samvidhaan++\Samvidhaan-UI-Design\artifacts\samvidhaan\src\data\framers.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def normalize_name(name):
    import re
    return re.sub(r'[^a-z0-9]', '', name.lower().replace('constituent assembly members', '').strip())

# Group by normalized name
by_name = {}
for item in data:
    norm = normalize_name(item['name'])
    if norm not in by_name:
        by_name[norm] = []
    by_name[norm].append(item)

# Find duplicates
duplicates = {name: entries for name, entries in by_name.items() if len(entries) > 1}

print(f"Total entries: {len(data)}")
print(f"Unique names (normalized): {len(by_name)}")
print(f"Number of duplicate name groups: {len(duplicates)}")

for name, entries in duplicates.items():
    print(f"\n--- Duplicate Group: {name} ---")
    for e in entries:
        print(f"ID: {e['id']}, Name: '{e['name']}', Party: '{e['party']}', Constituency: '{e['constituency']}'")
