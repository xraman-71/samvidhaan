import json

file_path = r'c:\Users\csc\Downloads\Samvidhaan++\Samvidhaan-UI-Design\artifacts\samvidhaan\src\data\framers.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def normalize_name(name):
    import re
    return re.sub(r'[^a-z0-9]', '', name.lower().replace('constituent assembly members', '').strip())

names = [normalize_name(item['name']) for item in data]
unique_names = set(names)

print(f"Total entries in JSON: {len(data)}")
print(f"Unique names: {len(unique_names)}")

if len(names) != len(unique_names):
    print("Duplicate names found!")
    from collections import Counter
    counts = Counter(names)
    duplicates = [name for name, count in counts.items() if count > 1]
    for dup in duplicates:
        print(f"Duplicate name: {dup}")
