import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default async function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Trakfy">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="24.000000pt" viewBox="0 0 650.000000 178.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,178.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M4779 1677 c-144 -41 -236 -153 -247 -298 l-5 -69 -68 0 -69 0 0
                -120 0 -119 68 -3 67 -3 3 -317 2 -318 155 0 155 0 0 320 0 320 105 0 105 0 0
                120 0 120 -105 0 -105 0 0 40 c0 69 62 109 142 91 20 -5 40 -11 46 -14 8 -6
                82 182 82 210 0 38 -236 67 -331 40z"/>
                  <path d="M3217 1673 c-4 -3 -7 -285 -7 -625 l0 -618 160 0 160 0 0 108 0 107
                46 48 c25 26 50 47 54 45 5 -2 63 -72 130 -155 l122 -153 189 0 c104 0 189 2
                189 5 0 3 -77 103 -171 223 -95 119 -185 234 -202 255 l-30 39 164 166 c91 92
                175 179 189 195 l23 27 -184 0 -184 0 -167 -161 -168 -161 0 331 0 331 -153 0
                c-85 0 -157 -3 -160 -7z"/>
                  <path d="M340 1425 l0 -115 -65 0 -65 0 0 -120 0 -120 65 0 65 0 0 -157 c1
                -250 18 -327 91 -401 88 -90 278 -126 429 -82 76 21 77 25 41 131 -42 124 -42
                125 -79 110 -16 -7 -49 -11 -72 -9 -33 2 -48 9 -64 31 -19 26 -21 44 -24 203
                l-3 174 105 0 106 0 0 120 0 120 -105 0 -105 0 0 115 0 115 -160 0 -160 0 0
                -115z"/>
                  <path d="M1667 1339 c-53 -13 -117 -46 -154 -82 l-33 -31 0 57 0 57 -150 0
                -150 0 0 -455 0 -455 159 0 160 0 3 253 c3 247 4 253 28 295 36 64 77 85 177
                90 l83 5 0 138 0 139 -42 -1 c-24 -1 -60 -5 -81 -10z"/>
                  <path d="M2230 1331 c-41 -9 -106 -31 -143 -48 l-68 -32 52 -103 c28 -57 53
                -105 55 -107 1 -2 23 7 49 19 107 52 237 65 312 31 46 -21 69 -51 79 -98 l6
                -31 -178 -4 c-152 -4 -187 -8 -234 -26 -118 -46 -173 -124 -174 -246 0 -81 20
                -131 76 -182 132 -125 417 -122 503 4 l25 37 0 -58 0 -57 150 0 150 0 0 278
                c0 158 -5 304 -11 337 -28 153 -137 258 -307 294 -77 16 -254 12 -342 -8z
                m340 -582 c0 -44 -4 -55 -33 -84 -81 -81 -222 -66 -242 26 -17 75 40 108 183
                109 l92 0 0 -51z"/>
                  <path d="M5190 1335 c0 -3 88 -213 196 -467 l195 -463 -35 -33 c-20 -18 -48
                -33 -63 -33 -59 -4 -99 3 -131 22 -18 10 -35 19 -37 19 -3 0 -30 -49 -60 -110
                l-55 -109 63 -30 c122 -57 276 -60 392 -7 64 29 134 100 176 179 18 34 123
                280 234 547 l201 485 -140 3 c-77 1 -145 1 -151 -1 -5 -3 -59 -127 -120 -276
                -60 -149 -112 -271 -115 -271 -3 0 -54 124 -115 275 l-110 275 -162 0 c-90 0
                -163 -2 -163 -5z"/>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/applications"
                  className="font-medium text-gray-500 hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/subscriptions"
                  className="font-medium text-gray-500 hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <a className="text-sm ml-10 btn text-gray-100 bg-gray-500 hover:bg-gray-400 w-full mb-4 sm:w-auto sm:mb-0 px-4 py-3 items-center" href="/api/auth/logout">LOGOUT</a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
