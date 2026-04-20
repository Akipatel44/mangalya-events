import json
from pathlib import Path

# Merge all extraction results
all_nodes = []
all_edges = []
all_hyperedges = []

# AST
ast = json.loads(Path('graphify-out/.graphify_ast.json').read_text())
all_nodes.extend(ast.get('nodes', []))
all_edges.extend(ast.get('edges', []))

# Cached
cached_path = Path('graphify-out/.graphify_cached.json')
if cached_path.exists():
    cached = json.loads(cached_path.read_text())
    all_nodes.extend(cached.get('nodes', []))
    all_edges.extend(cached.get('edges', []))
    all_hyperedges.extend(cached.get('hyperedges', []))

# Semantic data from extraction
semantic_data = {
  "nodes": [
    {"id": "project_mangalya_events", "label": "Mangalya Event Management", "file_type": "document"},
    {"id": "framework_nextjs14", "label": "Next.js 14 (App Router)", "file_type": "code"},
    {"id": "language_typescript", "label": "TypeScript", "file_type": "code"},
    {"id": "styling_tailwindcss", "label": "Tailwind CSS 3.4.16", "file_type": "code"},
    {"id": "animation_framermotion", "label": "Framer Motion 11.15.0", "file_type": "code"},
    {"id": "email_resend", "label": "Resend Email Service 6.12.0", "file_type": "code"},
    {"id": "deployment_vercel", "label": "Vercel Deployment Platform", "file_type": "document"},
    {"id": "vcs_github", "label": "GitHub Repository Integration", "file_type": "document"},
    {"id": "page_home", "label": "Home Page", "file_type": "code"},
    {"id": "page_about", "label": "About Page", "file_type": "code"},
    {"id": "page_services", "label": "Services Page", "file_type": "code"},
    {"id": "page_gallery", "label": "Gallery Page", "file_type": "code"},
    {"id": "page_events", "label": "Events Page", "file_type": "code"},
    {"id": "page_contact", "label": "Contact Page", "file_type": "code"},
    {"id": "component_navbar", "label": "Navbar Component", "file_type": "code"},
    {"id": "design_colorpalette", "label": "Color Palette (Gold, Maroon, Beige)", "file_type": "document"},
    {"id": "branding_rebranding", "label": "Rebranding: Mangalam to Mangalya", "file_type": "document"},
  ],
  "edges": [
    {"source": "project_mangalya_events", "target": "framework_nextjs14", "relation": "uses framework", "confidence": "EXTRACTED"},
    {"source": "project_mangalya_events", "target": "styling_tailwindcss", "relation": "styled with", "confidence": "EXTRACTED"},
    {"source": "project_mangalya_events", "target": "animation_framermotion", "relation": "uses animation", "confidence": "EXTRACTED"},
    {"source": "project_mangalya_events", "target": "deployment_vercel", "relation": "deploys to", "confidence": "EXTRACTED"},
    {"source": "page_home", "target": "component_navbar", "relation": "uses component", "confidence": "EXTRACTED"},
  ],
  "hyperedges": []
}

all_nodes.extend(semantic_data.get('nodes', []))
all_edges.extend(semantic_data.get('edges', []))
all_hyperedges.extend(semantic_data.get('hyperedges', []))

# Deduplicate nodes by ID
unique_nodes = {}
for node in all_nodes:
    if node.get('id') not in unique_nodes:
        unique_nodes[node['id']] = node

merged = {
    'nodes': list(unique_nodes.values()),
    'edges': all_edges,
    'hyperedges': all_hyperedges,
    'input_tokens': 0,
    'output_tokens': 0
}

Path('graphify-out/.graphify_extract.json').write_text(json.dumps(merged, indent=2))
print(f'Merged: {len(merged["nodes"])} unique nodes, {len(all_edges)} edges')
