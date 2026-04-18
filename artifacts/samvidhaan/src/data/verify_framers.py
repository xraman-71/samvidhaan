import json

file_path = r'c:\Users\csc\Downloads\Samvidhaan++\Samvidhaan-UI-Design\artifacts\samvidhaan\src\data\framers.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

ids = [item['id'] for item in data]
print(f"Total entries: {len(data)}")

# Check for duplicates
duplicates = [x for x in ids if ids.count(x) > 1]
if duplicates:
    print(f"Duplicate IDs found: {set(duplicates)}")
else:
    print("No duplicate IDs found.")

# Check for gaps
expected_ids = list(range(1, len(data) + 1))
if ids == expected_ids:
    print("IDs are sequential from 1 to", len(data))
else:
    print("IDs are NOT sequential.")
    for i, (actual, expected) in enumerate(zip(ids, expected_ids)):
        if actual != expected:
            print(f"Mismatch at index {i}: expected {expected}, got {actual}")
            break
