
import os

with open('scratch/quiz_output.ts', 'r', encoding='utf-16-le') as f:
    new_content = f.read()

# Fix potential BOM or encoding weirdness if any
new_content = new_content.replace('\ufeff', '')

target_path = 'src/data/quiz.ts'
with open(target_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line with '];' before the export
insert_pos = -1
for i in range(len(lines)-1, -1, -1):
    if lines[i].strip() == '];':
        insert_pos = i
        break

if insert_pos != -1:
    lines.insert(insert_pos, new_content + '\n')
    with open(target_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Successfully inserted content into {target_path}")
else:
    print("Could not find insertion point")
