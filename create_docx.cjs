const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ShadingType
} = require('docx');

// Helper to create styled paragraphs
function createHeading1(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 280, after: 140 },
    border: {
      bottom: { color: '0284C7', space: 4, value: 'single', size: 12 }
    }
  });
}

function createHeading2(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 200, after: 100 }
  });
}

function createHeading3(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 140, after: 60 }
  });
}

function createPara(text, bold = false) {
  return new Paragraph({
    children: [new TextRun({ text: text, bold: bold, font: 'Calibri', size: 22 })],
    spacing: { before: 60, after: 60 }
  });
}

function createBullet(text, boldPrefix = '') {
  const children = [];
  if (boldPrefix) {
    children.push(new TextRun({ text: boldPrefix + ' ', bold: true, font: 'Calibri', size: 22, color: '0369A1' }));
  }
  children.push(new TextRun({ text: text, font: 'Calibri', size: 22 }));

  return new Paragraph({
    children: children,
    bullet: { level: 0 },
    spacing: { before: 40, after: 40 }
  });
}

function createCallout(title, text) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      left: { style: BorderStyle.SINGLE, size: 24, color: '0284C7' }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { fill: 'F0F9FF', type: ShadingType.CLEAR },
            margins: { top: 120, bottom: 120, left: 180, right: 180 },
            children: [
              new Paragraph({
                children: [new TextRun({ text: title, bold: true, color: '0369A1', font: 'Calibri', size: 22 })],
                spacing: { after: 60 }
              }),
              new Paragraph({
                children: [new TextRun({ text: text, font: 'Calibri', size: 20, color: '334155' })]
              })
            ]
          })
        ]
      })
    ]
  });
}

function createCodeBlock(codeLines) {
  const tableRows = codeLines.map(line =>
    new TableRow({
      children: [
        new TableCell({
          margins: { top: 20, bottom: 20, left: 100, right: 100 },
          children: [
            new Paragraph({
              children: [new TextRun({ text: line, font: 'Consolas', size: 19, color: '0F172A' })],
              spacing: { before: 10, after: 10 }
            })
          ]
        })
      ]
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      left: { style: BorderStyle.SINGLE, size: 16, color: '0284C7' },
      right: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' }
    },
    shading: { fill: 'F8FAFC', type: ShadingType.CLEAR },
    rows: tableRows
  });
}

function createStyledTable(headers, rowsData) {
  const headerCells = headers.map(h =>
    new TableCell({
      shading: { fill: '0284C7', type: ShadingType.CLEAR },
      margins: { top: 100, bottom: 100, left: 100, right: 100 },
      children: [
        new Paragraph({
          children: [new TextRun({ text: h, bold: true, color: 'FFFFFF', font: 'Calibri', size: 20 })],
          alignment: AlignmentType.CENTER
        })
      ]
    })
  );

  const dataRows = rowsData.map((row, idx) => {
    const bgColor = idx % 2 === 0 ? 'FFFFFF' : 'F1F5F9';
    return new TableRow({
      children: row.map((cellText, cellIdx) =>
        new TableCell({
          shading: { fill: bgColor, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 100, right: 100 },
          children: [
            new Paragraph({
              children: [new TextRun({ text: cellText, font: 'Calibri', size: 19 })],
              alignment: cellIdx === 0 ? AlignmentType.LEFT : AlignmentType.CENTER
            })
          ]
        })
      )
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      left: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      right: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' }
    },
    rows: [new TableRow({ children: headerCells }), ...dataRows]
  });
}

async function buildDoc() {
  const doc = new Document({
    creator: 'Department of Master of Computer Applications',
    title: 'Graphics Algorithm Visualizer - Technical Project Report',
    description: 'Comprehensive MCA Project Report on Computer Graphics Rasterization and Clipping Algorithms',
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 22,
            color: '1E293B'
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 }
          }
        },
        children: [
          // Title Page / Header
          new Paragraph({
            children: [
              new TextRun({
                text: 'CHETAN BUSINESS SCHOOL, HUBBALLI',
                bold: true,
                size: 32,
                color: '0369A1',
                font: 'Calibri'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 60 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Department of Master of Computer Applications (MCA)',
                bold: true,
                size: 22,
                color: '475569',
                font: 'Calibri'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Affiliated to Karnatak University, Dharwad | Approved by AICTE, New Delhi',
                size: 18,
                color: '64748B',
                font: 'Calibri'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'GRAPHICS ALGORITHM VISUALIZER',
                bold: true,
                size: 36,
                color: '0F172A',
                font: 'Calibri'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 140, after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'An Interactive Framework for Real-Time 2D Computer Graphics Algorithm Simulation, Rasterization, and Clipping Analysis',
                italics: true,
                size: 22,
                color: '0284C7',
                font: 'Calibri'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 }
          }),

          // Metadata Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 8, color: '0284C7' },
              bottom: { style: BorderStyle.SINGLE, size: 8, color: '0284C7' },
              left: { style: BorderStyle.SINGLE, size: 8, color: '0284C7' },
              right: { style: BorderStyle.SINGLE, size: 8, color: '0284C7' }
            },
            shading: { fill: 'F8FAFC', type: ShadingType.CLEAR },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    margins: { top: 120, bottom: 120, left: 140, right: 140 },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Project Guide: ', bold: true, color: '0369A1' }),
                          new TextRun({ text: 'Dr. RaviKumar Roogi, Associate Professor & HOD' })
                        ],
                        spacing: { after: 80 }
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Academic Degree: ', bold: true, color: '0369A1' }),
                          new TextRun({ text: 'Master of Computer Applications (MCA)' })
                        ],
                        spacing: { after: 80 }
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Academic Year: ', bold: true, color: '0369A1' }),
                          new TextRun({ text: '2024 - 2025' })
                        ],
                        spacing: { after: 80 }
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Contact / Correspondence Email: ', bold: true, color: '0369A1' }),
                          new TextRun({ text: 'chaitranavalgund30@gmail.com' })
                        ],
                        spacing: { after: 120 }
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Project Team Members:', bold: true, color: '0369A1' })
                        ],
                        spacing: { after: 40 }
                      }),
                      new Paragraph({ children: [new TextRun({ text: '1. Ananya R Sugandhi' })] }),
                      new Paragraph({ children: [new TextRun({ text: '2. Chaitra D Navalgund' })] }),
                      new Paragraph({ children: [new TextRun({ text: '3. Iranna B Kumbar' })] }),
                      new Paragraph({ children: [new TextRun({ text: '4. Misba Pallan' })] }),
                      new Paragraph({ children: [new TextRun({ text: '5. Riya V Navade' })] }),
                      new Paragraph({ children: [new TextRun({ text: '6. Vasanta S Mathad' })] })
                    ]
                  })
                ]
              })
            ]
          }),

          createHeading1('1. EXECUTIVE SUMMARY & ABSTRACT'),
          createPara(
            'Computer Graphics rasterization and clipping algorithms form the foundational mathematical core of modern visual rendering systems, gaming engines, CAD software, and GPU architectures. However, traditional lecture-based computer science pedagogy struggles to convey the discrete, stateful nature of pixel selection, decision variable derivations, symmetry transformations, and pipeline vertex clipping.'
          ),
          createPara(
            'The "Graphics Algorithm Visualizer" is an educational web application specifically designed to bridge the gap between abstract mathematical formulas and tangible, interactive visual execution. Built with React 19, TypeScript, HTML5 Canvas, and Tailwind CSS, the platform delivers zero-latency simulation of classical line drawing, circle generation, and clipping algorithms with step-by-step state tracking, dynamic decision variable inspection, execution logs, and interactive parameter controls.'
          ),

          createHeading1('2. SYSTEM ARCHITECTURE & TECHNICAL STACK'),
          createBullet('React 19 & TypeScript: Component-based architecture providing strong typing, immutable state flow, and seamless UI reactivity.', 'Frontend Framework:'),
          createBullet('HTML5 Canvas 2D Rendering Engine: High-performance pixel-level raster manipulation capable of sub-millisecond redraws, custom Cartesian coordinate systems, and dynamic viewport transformations.', 'Visual Engine:'),
          createBullet('Tailwind CSS: Modern utility-first CSS delivering a polished dark/light mode interface with zero CSS bloat.', 'Styling Engine:'),
          createBullet('Lucide React: Crisp vector iconography for intuitive playback controls and user interaction.', 'Iconography:'),
          createBullet('Vite Build Pipeline: Lightning-fast Hot Module Replacement and production-grade minified bundles.', 'Tooling:'),

          createHeading1('3. INTERACTIVE USER INTERFACE: MODULE WALKTHROUGH'),
          createPara('The platform features a carefully structured 3-column responsive layout:'),
          createBullet('Top Navigation Bar: Houses algorithm selection (Dropdown), Global Reset, Grid Toggle, Theme Toggle (Dark/Light), Download Project Report button, and Synopsis viewer.', '1. Header:'),
          createBullet('Left Control Sidebar: Provides algorithm-specific parameter inputs (coordinates X1, Y1, X2, Y2, Circle radius R, Clipping boundary Xmin, Ymin, Xmax, Ymax), animation speed slider (10ms - 1000ms), and playback controls (Simulate Step-by-Step, Next Step, Reset, Run All).', '2. Left Sidebar (Input Panel):'),
          createBullet('Center Canvas Viewport: The core 2D pixel grid rendering area. Maps continuous screen coordinates into discrete discrete integer grid cells. Displays active raster points, animated scanline highlights, clipping windows, and interactive vertex points with real-time coordinate tooltips on mouse hover.', '3. Central Viewport:'),
          createBullet('Right Diagnostic Sidebar: Displays real-time decision variable monitors (p, d, dx, dy), active step explanation, algorithm pseudocode with execution-line highlight, and full historical calculation table.', '4. Right Sidebar (Analytics):'),

          createHeading1('4. DEEP-DIVE: COMPUTER GRAPHICS ALGORITHMS'),

          // Midpoint Circle
          createHeading2('4.1 Midpoint Circle Drawing Algorithm'),
          createPara(
            'The Midpoint Circle Algorithm utilizes the second-order implicit circle equation F(x, y) = x^2 + y^2 - r^2 to determine the pixel closest to the perimeter, taking advantage of 8-way symmetry to compute only 1/8th of the circle (45 degrees from (0, r) to (r/sqrt(2), r/sqrt(2))) and mirroring the calculated coordinates to all other 7 octants.'
          ),
          createBullet('Implicit function: F(x, y) = x^2 + y^2 - r^2', 'Mathematical Foundation:'),
          createBullet('Midpoint between candidate pixels: M = (x_k + 1, y_k - 0.5)', 'Midpoint Definition:'),
          createBullet('Initial decision parameter: p0 = 5/4 - r ~ 1 - r (for integer arithmetic)', 'Initial Decision Variable:'),
          createBullet('If p_k < 0: Choose E (x_k + 1, y_k). Next p_k+1 = p_k + 2x_k+1 + 1', 'Rule A (p < 0):'),
          createBullet('If p_k >= 0: Choose SE (x_k + 1, y_k - 1). Next p_k+1 = p_k + 2x_k+1 + 1 - 2y_k+1', 'Rule B (p >= 0):'),
          createBullet('(x, y), (y, x), (-x, y), (-y, x), (-x, -y), (-y, -x), (x, -y), (y, -x) around center (xc, yc)', '8-Way Symmetry Mapping:'),

          createCallout(
            'Worked Example (Center = 0,0, Radius = 6):',
            'p0 = 1 - 6 = -5.\n' +
            'Step 1: (0, 6), p = -5 < 0 -> Pick E: (1, 6). Next p = -5 + 2(1) + 1 = -2.\n' +
            'Step 2: (1, 6), p = -2 < 0 -> Pick E: (2, 6). Next p = -2 + 2(2) + 1 = 3.\n' +
            'Step 3: (2, 6), p = 3 >= 0 -> Pick SE: (3, 5). Next p = 3 + 2(3) + 1 - 2(5) = 0.\n' +
            'Step 4: (3, 5), p = 0 >= 0 -> Pick SE: (4, 4). Stop (x >= y).'
          ),

          // Midpoint Line
          createHeading2('4.2 Midpoint Line Drawing Algorithm'),
          createPara(
            'The Midpoint Line Algorithm determines the best raster coordinates for a straight line by evaluating the midpoint M between East (E) and North-East (NE) neighbors against the implicit line function F(x, y) = ax + by + c = 0, where a = dy, b = -dx, and c = dx*y0 - dy*x0.'
          ),
          createBullet('Initial decision parameter: d0 = 2*dy - dx', 'Initial Value:'),
          createBullet('If d_k < 0: Pick E (x_k+1, y_k). Update d_k+1 = d_k + 2*dy', 'Condition 1:'),
          createBullet('If d_k >= 0: Pick NE (x_k+1, y_k+1). Update d_k+1 = d_k + 2*(dy - dx)', 'Condition 2:'),
          createBullet('Eliminates all floating-point divisions, purely relying on fast integer additions and bit-shifts.', 'Primary Advantage:'),

          // Bresenham Line
          createHeading2('4.3 Bresenham\'s Line Drawing Algorithm'),
          createPara(
            'Developed by Jack E. Bresenham at IBM in 1962, this algorithm determines which of two pixels is closer to the true line path by calculating the sign of the difference between vertical distances (d1 - d2).'
          ),
          createBullet('Initial decision variable: p0 = 2*dy - dx', 'Initial Variable:'),
          createBullet('If p_k < 0: Plot (x_k + 1, y_k), next p_k+1 = p_k + 2*dy', 'Update (p < 0):'),
          createBullet('If p_k >= 0: Plot (x_k + 1, y_k + 1), next p_k+1 = p_k + 2*dy - 2*dx', 'Update (p >= 0):'),

          // DDA Line
          createHeading2('4.4 DDA (Digital Differential Analyzer) Line Algorithm'),
          createPara(
            'A scan-conversion line algorithm based on calculating either dx or dy using the differential equation dy/dx = m. It steps along the coordinate axis with the larger delta by 1 unit and increments the other axis by the fractional slope m.'
          ),
          createBullet('Steps = max(|dx|, |dy|)', 'Step Count:'),
          createBullet('x_inc = dx / Steps, y_inc = dy / Steps', 'Increments:'),
          createBullet('x_k+1 = x_k + x_inc, y_k+1 = y_k + y_inc; Plot (round(x), round(y))', 'Plotting:'),
          createBullet('Simple to implement but slower on older hardware due to floating-point additions and rounding operations.', 'Limitation:'),

          // Cohen-Sutherland
          createHeading2('4.5 Cohen-Sutherland Line Clipping Algorithm'),
          createPara(
            'Divides the 2D plane into 9 regions using a 4-bit Outcode: [TOP, BOTTOM, RIGHT, LEFT].'
          ),
          createBullet('Bit 1 (Sign bit): Top (y > Ymax); Bit 2: Bottom (y < Ymin); Bit 3: Right (x > Xmax); Bit 4: Left (x < Xmin).', '4-Bit Code:'),
          createBullet('Trivial Accept: code1 | code2 == 0000 (both endpoints completely inside).', 'Test 1:'),
          createBullet('Trivial Reject: code1 & code2 != 0000 (both endpoints share an outside region).', 'Test 2:'),
          createBullet('Clipping Step: When neither test passes, the outside point is clipped against the boundary edge using slope m = (y2 - y1) / (x2 - x1), calculating new intersection coordinates.', 'Test 3:'),

          // Sutherland-Hodgman
          createHeading2('4.6 Sutherland-Hodgman Polygon Clipping Algorithm'),
          createPara(
            'Clips an arbitrary subject polygon against a convex clipping window by processing vertices sequentially through a 4-stage pipeline against each infinite clipping edge (Left, Right, Bottom, Top).'
          ),
          createBullet('Case 1 (In -> In): Save vertex V2.', 'Transition Case 1:'),
          createBullet('Case 2 (In -> Out): Compute and save intersection point I.', 'Transition Case 2:'),
          createBullet('Case 3 (Out -> Out): Discard (save nothing).', 'Transition Case 3:'),
          createBullet('Case 4 (Out -> In): Compute and save intersection point I, then save vertex V2.', 'Transition Case 4:'),

          createHeading1('5. ALGORITHM COMPARISON & COMPLEXITY MATRIX'),
          createStyledTable(
            ['Algorithm Name', 'Primary Data Type', 'Time Complexity', 'Space Complexity', 'Arithmetic Operations', 'Key Advantage'],
            [
              ['DDA Line', 'Float (floating addition)', 'O(N)', 'O(1)', 'Float Add + Round()', 'Simple conceptual formulation'],
              ['Bresenham Line', 'Pure Integer', 'O(N)', 'O(1)', 'Integer Add + Shift', 'Highly optimized, hardware standard'],
              ['Midpoint Line', 'Pure Integer', 'O(N)', 'O(1)', 'Integer Add + Shift', 'Extensible to higher-order curves'],
              ['Midpoint Circle', 'Pure Integer', 'O(R)', 'O(1)', 'Integer Add + Shift', '8-Way symmetry, calculates only 1/8th'],
              ['Cohen-Sutherland', 'Integer Outcode + Float', 'O(1) avg / O(N)', 'O(1)', 'Bitwise OR, AND + Line intersection', 'Lightning fast rejection of non-visible lines'],
              ['Sutherland-Hodgman', 'Polygon Vertex List', 'O(E * V)', 'O(V)', 'Vector Edge Dot Product & Lerp', 'Produces valid enclosed convex polygons']
            ]
          ),

          createHeading1('6. VIVA VOCE EXAMINATION QUESTIONS & ANSWERS'),
          createPara('Top questions frequently asked by academic university examiners:'),

          createHeading3('Q1: Why is Bresenham\'s algorithm faster than DDA?'),
          createPara(
            'Answer: DDA requires floating-point additions and rounding at every step (round(x), round(y)), which incurs processor floating-point unit (FPU) overhead and cumulative precision drift. In contrast, Bresenham\'s algorithm uses pure integer arithmetic, bitwise shifts, and addition, which execute in a single CPU cycle.'
          ),

          createHeading3('Q2: How does 8-way symmetry work in circle drawing?'),
          createPara(
            'Answer: A circle centered at the origin is symmetrical across the X-axis, Y-axis, and the diagonals y = x and y = -x. By computing pixel coordinates in just the first octant (0 to 45 degrees, where x <= y), we can generate all remaining 7 points by simple coordinate reflections: (x, y), (y, x), (-x, y), (-y, x), (-x, -y), (-y, -x), (x, -y), and (y, -x).'
          ),

          createHeading3('Q3: What are the Outcodes in Cohen-Sutherland and why are bitwise operations used?'),
          createPara(
            'Answer: Outcodes are 4-bit nibbles [TBRL] representing Top, Bottom, Right, and Left relative to the clipping window. Using bitwise operations allows the algorithm to perform instantaneous visibility tests in 1 cycle: (code1 | code2 == 0) trivially accepts completely visible lines, while (code1 & code2 != 0) trivially rejects lines that lie completely to one side of the window.'
          ),

          createHeading3('Q4: What is the limitation of the Sutherland-Hodgman algorithm?'),
          createPara(
            'Answer: Sutherland-Hodgman is designed specifically for convex clipping windows. If used on concave clipping polygons or concave subject polygons that get split into multiple distinct pieces, it can produce spurious connecting bridge lines. Algorithms like Weiler-Atherton solve this by handling concave boundaries and multi-polygon outputs.'
          ),

          createHeading3('Q5: What is the initial decision parameter for Midpoint Circle and why is it 1 - r?'),
          createPara(
            'Answer: Evaluating the circle function at the midpoint between (1, r) and (1, r-1) yields: F(1, r - 1/2) = 1^2 + (r - 1/2)^2 - r^2 = 1 + r^2 - r + 1/4 - r^2 = 5/4 - r. Since all radii r are integers, 5/4 - r can be approximated as 1 - r without altering any decision outcomes, maintaining pure integer arithmetic.'
          ),

          createHeading1('7. ORAL DEFENSE / PRESENTATION GUIDE FOR TOMORROW'),
          createPara('Follow this 5-stage script during your project presentation:'),
          createBullet(
            'Good morning respected examiners and guide Dr. RaviKumar Roogi. Today, our MCA team (Chaitra Navalgund and team from Chetan Business School) presents the "Graphics Algorithm Visualizer", an interactive pedagogical platform built with React 19, HTML5 Canvas, and TypeScript to simulate classical 2D computer graphics rasterization and clipping algorithms.',
            'Step 1 (Introduction - 1 min):'
          ),
          createBullet(
            'In textbooks, students struggle with why decision parameters like p = 2dy - dx exist or how symmetry operates. Our project transforms theoretical mathematics into real-time, visual, step-by-step interactive animations.',
            'Step 2 (Problem & Motivation - 1 min):'
          ),
          createBullet(
            'Demonstrate Midpoint Circle with radius 6 or 10. Show how the 8-way symmetry clones pixels across all 8 octants simultaneously. Then show Cohen-Sutherland line clipping with trivial acceptance and intersection calculation.',
            'Step 3 (Live UI Demonstration - 3 mins):'
          ),
          createBullet(
            'Highlight our state machine: we store iteration history in an immutable React state array, allowing forward stepping, rewind, and live tracking of decision variables alongside algorithmic pseudocode.',
            'Step 4 (Technical Architecture - 2 mins):'
          ),
          createBullet(
            'Summarize how all algorithms minimize computational complexity from floating-point math to pure single-cycle integer arithmetic, and invite questions from the panel.',
            'Step 5 (Conclusion & Viva - 1 min):'
          )
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  
  // Output paths
  const publicPath = path.join(__dirname, '../public/Graphics_Algorithm_Visualizer_Project_Report.docx');
  fs.writeFileSync(publicPath, buffer);
  console.log('Successfully wrote docx to:', publicPath);

  const rootPath = path.join(__dirname, '../Graphics_Algorithm_Visualizer_Project_Report.docx');
  fs.writeFileSync(rootPath, buffer);
  console.log('Successfully wrote docx to:', rootPath);

  // Also write to artifact path if it exists or create it
  const artifactDir = path.join(__dirname, '../.aistudio/artifacts/brain/9c09bb10-12fe-4b14-9cbe-ccf8e7b9693a');
  if (fs.existsSync(artifactDir)) {
    const artifactPath = path.join(artifactDir, 'Graphics_Algorithm_Visualizer_Project_Report.docx');
    fs.writeFileSync(artifactPath, buffer);
    console.log('Successfully wrote docx to artifact:', artifactPath);
  }
}

buildDoc().catch(err => {
  console.error('Error generating docx:', err);
  process.exit(1);
});
