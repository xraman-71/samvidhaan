import os

file_path = r"c:\Users\csc\Downloads\Samvidhaan++\Samvidhaan-UI-Design\artifacts\samvidhaan\scratch\quiz_output.ts"
output_path = r"c:\Users\csc\Downloads\Samvidhaan++\Samvidhaan-UI-Design\artifacts\samvidhaan\scratch\quiz_output_fixed.ts"

# Read the file (now it's UTF-8 after my last fix, but with mojibake)
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def fix_mojibake(text):
    # Common mojibake: UTF-8 interpreted as CP437 (OEM 437)
    # We try to encode back to CP437 and decode as UTF-8
    
    # We need a custom mapping for some chars that might not be 1:1 or are tricky
    # CP437 mapping for the chars we saw:
    # ≡ -> \xf0
    # ƒ -> \x9f
    # æ -> \x91
    # ñ -> \xa4
    # Γ -> \xe2
    # Å -> \x8f
    # │ -> \xb3
    # ¢ -> \xa2
    # ∩ -> \xef
    # ╕ -> \xb8
    
    # A safer way is to use a translation table or just handle the specific strings if they are few
    # But let's try the encode/decode trick first on the whole content
    
    parts = []
    for char in text:
        try:
            # Try to see if it's a single byte in CP437
            b = char.encode('cp437')
            parts.append(b)
        except:
            # If not, it's probably already a correct char or something else
            # We can't easily fix it this way if it's mixed
            parts.append(char.encode('utf-8'))
    
    # Reassemble and try to decode as utf-8
    raw_bytes = b"".join(parts)
    try:
        return raw_bytes.decode('utf-8')
    except Exception as e:
        # If it fails, return original
        return text

# The mojibake is likely only in the 'icon' fields.
# Let's target them specifically to avoid corrupting the rest of the file.
import re

def icon_replacer(match):
    mojibake_icon = match.group(1)
    # Manual mapping based on my analysis
    mapping = {
        "ΓÅ│": "⌛",
        "≡ƒæñ": "👤",
        "≡ƒÅ¢∩╕Å": "🏢️",
        "≡ƒù║∩╕Å": "🗺️",
        "≡ƒÆ░": "💰",
        "≡ƒÜ¢": "🚢",
        "≡ƒùú∩╕Å": "🗣️",
        "≡ƒôª": "📦",
        "≡ƒô£": "📜"
    }
    return f'icon: "{mapping.get(mojibake_icon, mojibake_icon)}"'

fixed_content = re.sub(r'icon: "([^"]+)"', icon_replacer, content)

with open(output_path, "w", encoding="utf-8") as f:
    f.write(fixed_content)

print(f"Fixed file with corrected icons written to {output_path}")
