interface ConstructionBgPatternProps {
  variant?: 'blueprint' | 'crane' | 'skyline' | 'truss' | 'schematic'
  className?: string
  opacity?: string
  inverted?: boolean
}

export default function ConstructionBgPattern({
  variant = 'blueprint',
  className = '',
  opacity = 'opacity-[0.035]',
  inverted = false,
}: ConstructionBgPatternProps) {
  const strokeColor = inverted ? '#1ea6dc' : '#072b58'
  const secondaryColor = inverted ? '#38bdf8' : '#1ea6dc'

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none -z-10 ${opacity} ${className}`}
      aria-hidden="true"
    >
      {variant === 'blueprint' && (
        <svg
          className="h-full w-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Architectural Elevation Lines */}
          <g stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4">
            <line x1="100" y1="80" x2="1340" y2="80" />
            <line x1="100" y1="220" x2="1340" y2="220" />
            <line x1="100" y1="380" x2="1340" y2="380" />
            <line x1="100" y1="520" x2="1340" y2="520" />
            <line x1="300" y1="40" x2="300" y2="560" />
            <line x1="650" y1="40" x2="650" y2="560" />
            <line x1="1050" y1="40" x2="1050" y2="560" />
          </g>

          {/* Building Facade Wireframe Outlines */}
          <g stroke={secondaryColor} strokeWidth="1.5">
            {/* Building 1 - Left Tower */}
            <rect x="180" y="150" width="220" height="370" />
            <line x1="180" y1="210" x2="400" y2="210" />
            <line x1="180" y1="270" x2="400" y2="270" />
            <line x1="180" y1="330" x2="400" y2="330" />
            <line x1="180" y1="390" x2="400" y2="390" />
            <line x1="180" y1="450" x2="400" y2="450" />
            <line x1="290" y1="150" x2="290" y2="520" strokeDasharray="3 3" />

            {/* Building 2 - Center Complex */}
            <polygon points="560,100 780,70 780,520 560,520" />
            <line x1="560" y1="160" x2="780" y2="130" />
            <line x1="560" y1="220" x2="780" y2="190" />
            <line x1="560" y1="280" x2="780" y2="250" />
            <line x1="560" y1="340" x2="780" y2="310" />
            <line x1="560" y1="400" x2="780" y2="370" />
            <line x1="560" y1="460" x2="780" y2="430" />
            <line x1="670" y1="85" x2="670" y2="520" />

            {/* Building 3 - Right Tiered Commercial */}
            <rect x="940" y="190" width="260" height="330" />
            <rect x="980" y="110" width="180" height="80" />
            <rect x="1030" y="50" width="80" height="60" />
            <line x1="940" y1="270" x2="1200" y2="270" />
            <line x1="940" y1="350" x2="1200" y2="350" />
            <line x1="940" y1="430" x2="1200" y2="430" />
            <line x1="1070" y1="50" x2="1070" y2="520" strokeDasharray="3 3" />
          </g>

          {/* Dimension Annotation Markers */}
          <g stroke={strokeColor} strokeWidth="1">
            <line x1="140" y1="150" x2="140" y2="520" />
            <polyline points="135,160 140,150 145,160" fill="none" />
            <polyline points="135,510 140,520 145,510" fill="none" />
            <text x="110" y="340" fill={strokeColor} fontSize="11" fontFamily="monospace" transform="rotate(-90 110,340)">
              ELEV +48.50M
            </text>

            <line x1="180" y1="550" x2="400" y2="550" />
            <polyline points="190,545 180,550 190,555" fill="none" />
            <polyline points="390,545 400,550 390,555" fill="none" />
            <text x="260" y="568" fill={strokeColor} fontSize="11" fontFamily="monospace">
              SPAN 22.00M
            </text>
          </g>
        </svg>
      )}

      {variant === 'crane' && (
        <svg
          className="h-full w-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Tower Crane Silhouette and Steel Lattice */}
          <g stroke={secondaryColor} strokeWidth="1.5">
            {/* Vertical Crane Mast */}
            <line x1="1180" y1="60" x2="1180" y2="560" />
            <line x1="1220" y1="60" x2="1220" y2="560" />
            {/* Mast Cross Bracing */}
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i}>
                <line x1="1180" y1={60 + i * 42} x2="1220" y2={102 + i * 42} />
                <line x1="1220" y1={60 + i * 42} x2="1180" y2={102 + i * 42} />
                <line x1="1180" y1={102 + i * 42} x2="1220" y2={102 + i * 42} />
              </g>
            ))}

            {/* Crane Jib (Horizontal Boom Arm) */}
            <line x1="860" y1="60" x2="1340" y2="60" strokeWidth="2" />
            <line x1="860" y1="75" x2="1340" y2="75" />
            {/* Jib Cross Bracing */}
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1={860 + i * 30} y1="60" x2={875 + i * 30} y2="75" />
            ))}

            {/* Tower Apex and Pendant Cables */}
            <polygon points="1180,60 1200,5 1220,60" strokeWidth="2" />
            <line x1="1200" y1="5" x2="940" y2="60" strokeDasharray="4 2" />
            <line x1="1200" y1="5" x2="1050" y2="60" strokeDasharray="4 2" />
            <line x1="1200" y1="5" x2="1300" y2="60" strokeDasharray="4 2" />

            {/* Counterweight */}
            <rect x="1270" y="75" width="55" height="35" fill={strokeColor} fillOpacity="0.15" />

            {/* Hoist Trolley & Cable Hook */}
            <rect x="970" y="75" width="20" height="10" />
            <line x1="980" y1="85" x2="980" y2="280" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="980" cy="285" r="5" />
            <path d="M980 290 Q980 305 970 305 Q960 305 965 295" strokeWidth="1.5" />
          </g>

          {/* Under-Construction Building Core */}
          <g stroke={strokeColor} strokeWidth="1.2">
            <rect x="700" y="240" width="240" height="320" />
            <line x1="700" y1="300" x2="940" y2="300" />
            <line x1="700" y1="360" x2="940" y2="360" />
            <line x1="700" y1="420" x2="940" y2="420" />
            <line x1="700" y1="480" x2="940" y2="480" />
            {/* Scaffolding details */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={i} x1={700 + i * 48} y1="240" x2={700 + i * 48} y2="560" strokeDasharray="2 2" />
            ))}
          </g>
        </svg>
      )}

      {variant === 'skyline' && (
        <svg
          className="h-full w-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Layered Modern Architectural Skyline Wireframe */}
          <g stroke={strokeColor} strokeWidth="1.2">
            {/* Background Silhouettes */}
            <polygon points="50,550 50,280 130,240 210,280 210,550" />
            <rect x="230" y="200" width="120" height="350" />
            <polygon points="370,550 370,140 450,110 530,140 530,550" />
            <rect x="560" y="260" width="140" height="290" />
            <polygon points="720,550 720,180 810,120 900,180 900,550" />
            <rect x="920" y="220" width="130" height="330" />
            <polygon points="1070,550 1070,90 1150,50 1230,90 1230,550" />
            <rect x="1250" y="190" width="140" height="360" />
          </g>

          {/* Foreground Grid Facade Texture */}
          <g stroke={secondaryColor} strokeWidth="1" strokeDasharray="3 3">
            <line x1="50" y1="340" x2="210" y2="340" />
            <line x1="50" y1="420" x2="210" y2="420" />
            <line x1="50" y1="500" x2="210" y2="500" />
            <line x1="130" y1="240" x2="130" y2="550" />

            <line x1="370" y1="220" x2="530" y2="220" />
            <line x1="370" y1="300" x2="530" y2="300" />
            <line x1="370" y1="380" x2="530" y2="380" />
            <line x1="370" y1="460" x2="530" y2="460" />
            <line x1="450" y1="110" x2="450" y2="550" />

            <line x1="720" y1="260" x2="900" y2="260" />
            <line x1="720" y1="340" x2="900" y2="340" />
            <line x1="720" y1="420" x2="900" y2="420" />
            <line x1="810" y1="120" x2="810" y2="550" />

            <line x1="1070" y1="180" x2="1230" y2="180" />
            <line x1="1070" y1="260" x2="1230" y2="260" />
            <line x1="1070" y1="340" x2="1230" y2="340" />
            <line x1="1070" y1="420" x2="1230" y2="420" />
            <line x1="1070" y1="500" x2="1230" y2="500" />
            <line x1="1150" y1="50" x2="1150" y2="550" />
          </g>

          {/* Diagonal Glass Bracing Aesthetic */}
          <g stroke={secondaryColor} strokeWidth="0.8" opacity="0.7">
            <line x1="230" y1="200" x2="350" y2="300" />
            <line x1="350" y1="200" x2="230" y2="300" />
            <line x1="230" y1="300" x2="350" y2="400" />
            <line x1="350" y1="300" x2="230" y2="400" />
            <line x1="920" y1="220" x2="1050" y2="330" />
            <line x1="1050" y1="220" x2="920" y2="330" />
            <line x1="920" y1="330" x2="1050" y2="440" />
            <line x1="1050" y1="330" x2="920" y2="440" />
          </g>
        </svg>
      )}

      {variant === 'truss' && (
        <svg
          className="h-full w-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Heavy Civil Structural Steel Truss Framework */}
          <g stroke={secondaryColor} strokeWidth="1.5">
            {/* Top Chord */}
            <line x1="0" y1="120" x2="1440" y2="120" strokeWidth="2.5" />
            {/* Bottom Chord */}
            <line x1="0" y1="280" x2="1440" y2="280" strokeWidth="2.5" />

            {/* Vertical Struts and Diagonal Web Members */}
            {Array.from({ length: 13 }).map((_, i) => {
              const x1 = i * 120
              const x2 = (i + 1) * 120
              return (
                <g key={i}>
                  <line x1={x1} y1="120" x2={x1} y2="280" strokeWidth="1.5" />
                  <line x1={x1} y1={i % 2 === 0 ? 120 : 280} x2={x2} y2={i % 2 === 0 ? 280 : 120} strokeWidth="1.5" />
                  {/* Connection Gusset Plate Circles */}
                  <circle cx={x1} cy="120" r="4" fill={strokeColor} />
                  <circle cx={x1} cy="280" r="4" fill={strokeColor} />
                </g>
              )
            })}
          </g>

          {/* Lower Foundation Groundwork & Dimension Grid */}
          <g stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4">
            <line x1="0" y1="380" x2="1440" y2="380" />
            <line x1="0" y1="480" x2="1440" y2="480" />
            {Array.from({ length: 7 }).map((_, i) => (
              <g key={i}>
                <line x1={i * 240} y1="280" x2={i * 240} y2="560" />
                <circle cx={i * 240} cy="480" r="8" stroke={strokeColor} />
                <text x={i * 240 - 4} y="484" fill={strokeColor} fontSize="10" fontFamily="sans-serif">
                  {String.fromCharCode(65 + i)}
                </text>
              </g>
            ))}
          </g>
        </svg>
      )}

      {variant === 'schematic' && (
        <svg
          className="h-full w-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Isometric Construction Floorplan & Column Layout */}
          <g stroke={secondaryColor} strokeWidth="1.2">
            {/* Isometric Grid Prisms */}
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => {
                const cx = 160 + col * 150 + (row % 2) * 75
                const cy = 120 + row * 70
                return (
                  <g key={`${row}-${col}`}>
                    <polygon
                      points={`${cx},${cy - 25} ${cx + 45},${cy} ${cx},${cy + 25} ${cx - 45},${cy}`}
                    />
                    <line x1={cx} y1={cy + 25} x2={cx} y2={cy + 55} strokeWidth="1.5" stroke={strokeColor} />
                    <circle cx={cx} cy={cy} r="3" fill={strokeColor} />
                  </g>
                )
              })
            )}
          </g>

          {/* Drafting Angle Markers and Cross-hairs */}
          <g stroke={strokeColor} strokeWidth="1">
            <circle cx="200" cy="180" r="40" strokeDasharray="3 3" />
            <line x1="150" y1="180" x2="250" y2="180" />
            <line x1="200" y1="130" x2="200" y2="230" />

            <circle cx="1240" cy="420" r="50" strokeDasharray="4 2" />
            <line x1="1180" y1="420" x2="1300" y2="420" />
            <line x1="1240" y1="360" x2="1240" y2="480" />
            <text x="1245" y="415" fill={strokeColor} fontSize="11" fontFamily="monospace">
              COORD R-09
            </text>
          </g>
        </svg>
      )}
    </div>
  )
}
