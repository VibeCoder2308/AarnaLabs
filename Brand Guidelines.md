 Aarna-AI Brand Design & Color Palette Guideline
1. Core Philosophy
Concept: "Future Intelligence" meets "Minimalist Utility." Tone: Confident, sleek, high-tech, dark mode-first. No clutter. Visual Anchor: Deep space black background with high-contrast white text and vibrant orange accents.

2. Color Palette
Primary Colors
Role	Color Name	Hex Code	Usage
Background	Void Black	#050505	Main background color. Deep, almost absolute black.
Surface	Dark Charcoal	#111111	For cards, modals, or slightly elevated surfaces.
Primary Text	Pure White	#FFFFFF	Main headings and high-priority content.
Secondary Text	Steel Grey	#9CA3AF	Subheadings, descriptions, and supporting text.
Accent Colors
Role	Color Name	Hex Code	Usage
Brand Accent	Cyber Orange	#FF7722	Key highlights within text, primary CTAs, and hover states. Gradient permitted: #FF8800 to #FF5500.
Success	Signal Green	#10B981	Status indicators (e.g., "Online" badge).
Border/Stroke	Glass White	#FFFFFF15	Very subtle borders (15% opacity white) on inputs/buttons.
3. Typography
Branding Font: Forzon (Custom geometric branding font)
Heading Font: GT Super Display (Elegant, high-contrast serif)
Body Font: GT Super Text (Highly readable serif with premium feel)

Hierarchy
AARNA LABS Headline (Logo/Hero Branding):
- Font: Forzon
- Letter Spacing: 0.02em - 0.1em (Wide)
- Weight: Regular (400)

H1 (Hero Heading):
Size: 80px - 96px (md+), 48px (mobile).
Font: GT Super Display
Weight: 500 (Medium).
Letter Spacing: -0.04em (Tight).
Line Height: 1.0.

H2 (Section Heading):
Size: 36px - 48px.
Font: GT Super Display
Weight: 500 (Medium).
Color: White.

Body / Description:
Size: 18px - 20px.
Font: GT Super Text
Weight: 400 (Regular).
Color: Steel Grey (#9CA3AF).
Line Height: 1.6.
4. UI Components & Effects
Navigation Bar
Shape: Floating "Pill" shape.
Position: Fixed top-center, with top margin.
Style: Glassmorphism. Background rgba(20, 20, 20, 0.6) with backdrop-filter: blur(12px).
Border: 1px solid rgba(255, 255, 255, 0.1).
Radius: Full pill radius (999px).
Buttons
Primary Button (if needed):
Background: Cyber Orange gradient.
Text: White or Black (depending on contrast).
Secondary / Outline Button ("Learn More"):
Background: Transparent or very dark grey (#1A1A1A).
Border: 1px solid #333333.
Radius: 8px or 12px (Medium rounded).
Hover: Glow effect or border lightens to #666666.
Badges
Status Badge:
Background: Very dark pill (#111111).
Border: 1px solid #333333.
Content: Green Dot (#10B981) + Text "Online".
Effect: Slight glow on the green dot.
Graphic Elements
Background Texture: Subtle "Grid Dots" or "Noise" overlay at 5-10% opacity to prevent banding and add texture to the black void.
Logos: Partner logos should be monochrome (all grey #666666) to avoid color clashes. Opacity 50-70%.
5. Layout Rules
Spacing: Heavy use of negative space. Margins should be double what you expect. gap-8 to gap-16 in Tailwind terms.
Alignment: Central alignment for Hero sections. Left alignment for feature blocks is acceptable but Center is preferred for the main impact.
Grid: 12-column grid, but content is often constrained to the center 8 or 10 columns for readability.
6. Prompt Engineering Context
When instructing an LLM to generate this, use the following system prompt snippet:

"Design a high-end, dark-mode landing page for an AI agency. Use a 'Void Black' hex #050505 background. Typography must be large, centered, and sans-serif (Inter/Roobert). Use 'Cyber Orange' #FF7722 as the single accent color for key words in the H1 headline. UI elements like the navbar should use a floating pill glassmorphism style. Keep the layout spacious, minimal, and premium. Partner logos must be muted monochrome."