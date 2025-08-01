# Data Format Specification

## Overview

This document describes the format and specifications of the 3D meshes included in the CrossSDF dataset.

## File Format

- **Format**: STL (STereoLithography)
- **Encoding**: Binary STL format
- **Extension**: `.stl`

## Coordinate System

All meshes have been preprocessed with the following normalization:

- **Coordinate Range**: All vertices are normalized to the range `[-1, 1]` in all three dimensions (x, y, z)
- **Origin**: The mesh centroid is positioned at the origin `(0, 0, 0)`
- **Units**: Dimensionless (normalized coordinates)
- **Handedness**: Right-handed coordinate system

## Mesh Properties

### General Specifications

- **Topology**: All meshes are manifold and watertight
- **Normals**: Face normals are consistently oriented outward
- **Precision**: Single precision floating-point coordinates
- **Quality**: High-resolution meshes suitable for research applications

### Thin Structures Dataset

Located in `data/thin_structures/`

| File | Vertices (approx.) | Faces (approx.) | Characteristics |
|------|-------------------|-----------------|-----------------|
| `heart.stl` | ~50k | ~100k | Complex cardiac geometry with chambers |
| `pulmonary_vascular_tree.stl` | ~80k | ~160k | Highly branched tree structure |
| `pulmonary_arteries.stl` | ~30k | ~60k | Major arterial branches |
| `cerebral_arteries.stl` | ~25k | ~50k | Circle of Willis topology |
| `coronary_arteries_v1.stl` | ~20k | ~40k | Left/right coronary system |
| `coronary_arteries_v2.stl` | ~18k | ~36k | Alternative coronary topology |

**Characteristics:**
- Tubular geometries with varying diameters
- Complex branching patterns
- High aspect ratio structures
- Thin-walled vessels

### Thick Structures Dataset

Located in `data/thick_structures/`

| File | Vertices (approx.) | Faces (approx.) | Characteristics |
|------|-------------------|-----------------|-----------------|
| `armadillo.stl` | ~35k | ~70k | Solid object with surface details |
| `brain.stl` | ~40k | ~80k | Convoluted surface topology |
| `eight.stl` | ~15k | ~30k | Figure-eight manifold |
| `hand.stl` | ~25k | ~50k | Articulated finger geometry |
| `mammoth.stl` | ~45k | ~90k | Large solid with surface features |
| `ok.stl` | ~20k | ~40k | Hand gesture with finger details |

**Characteristics:**
- Solid geometries with varying complexity
- Surface details and features
- Genus-0 to genus-N topologies
- Varying scales and proportions

## Loading Instructions

### Python (trimesh)
```python
import trimesh
import numpy as np

# Load mesh
mesh = trimesh.load('data/thin_structures/heart.stl')

# Verify normalization
vertices = mesh.vertices
print(f"Coordinate range: [{vertices.min():.3f}, {vertices.max():.3f}]")
print(f"Centroid: {vertices.mean(axis=0)}")
```

### Python (Open3D)
```python
import open3d as o3d
import numpy as np

# Load mesh
mesh = o3d.io.read_triangle_mesh('data/thick_structures/armadillo.stl')

# Check properties
vertices = np.asarray(mesh.vertices)
print(f"Number of vertices: {len(vertices)}")
print(f"Number of faces: {len(mesh.triangles)}")
print(f"Is watertight: {mesh.is_watertight()}")
```

### MATLAB
```matlab
% Load STL file
TR = stlread('data/thin_structures/pulmonary_vascular_tree.stl');

% Display properties
fprintf('Number of vertices: %d\n', size(TR.Points, 1));
fprintf('Number of faces: %d\n', size(TR.ConnectivityList, 1));

% Verify normalization
coords = TR.Points;
fprintf('Coordinate range: [%.3f, %.3f]\n', min(coords(:)), max(coords(:)));
```

## Quality Assurance

All meshes have been validated for:

- ✅ **Manifold topology**: No non-manifold edges or vertices
- ✅ **Watertight geometry**: No holes or gaps in the surface
- ✅ **Consistent normals**: All face normals point outward
- ✅ **Normalization**: Coordinates within [-1, 1] range
- ✅ **Centered**: Centroid at origin
- ✅ **Binary format**: Efficient storage and loading

## Usage Notes

1. **Coordinate System**: Remember that meshes are normalized. Scale appropriately for your application.

2. **Large Files**: Some meshes (especially `pulmonary_vascular_tree.stl` at ~96MB) are large. Consider using Git LFS for version control.

3. **Precision**: Binary STL format uses single precision. For applications requiring higher precision, consider converting to other formats.

4. **Topology**: Thin structures may have complex branching that creates challenging topologies for certain algorithms.

5. **Benchmarking**: Use consistent loading and preprocessing across different methods for fair comparison.

## Troubleshooting

### Common Issues

**File size warnings**: Large STL files may trigger warnings in Git. This is normal for high-resolution meshes.

**Loading errors**: Ensure your STL reader supports binary format (most modern libraries do).

**Coordinate issues**: All meshes are pre-normalized. Don't apply additional normalization unless needed.

**Memory usage**: Large meshes may require significant RAM. Consider mesh decimation for memory-constrained applications.

## Contact

For questions about the data format or issues with specific meshes, contact:
- Salvatore Esposito: salvatore.esp95@gmail.com