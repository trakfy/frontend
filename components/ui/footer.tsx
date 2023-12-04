import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Trakfy">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="16.000000pt" viewBox="0 0 650.000000 178.000000" preserveAspectRatio="xMidYMid meet">
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
              <div className="text-sm text-gray-300">Simplifying API Distribution!</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a href="/#features-id" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">Features</a>
                  </li>
                  <li className="mb-1">
                    <a href="/#pricing-id" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">Pricing</a>
                  </li>
                  <li className="mb-1">
                    <a href="/#faq-id" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">FAQ</a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">Legal</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/terms-conditions" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">Terms & Conditions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/privacy-policy" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">Help</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out">Status</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* <li>
                <Link href="/" target="_blank" className="flex justify-center items-center text-purple-300 bg-gray-200 hover:text-gray-200 hover:bg-purple-300 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link href="https://github.com/trakfy" target="_blank" className="flex justify-center items-center text-purple-300 bg-gray-200 hover:text-gray-200 hover:bg-purple-300 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link href="/" target="_blank" className="flex justify-center items-center text-purple-300 bg-gray-200 hover:text-gray-200 hover:bg-purple-300 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link href="/" target="_blank" className="flex justify-center items-center text-purple-300 bg-gray-200 hover:text-gray-200 hover:bg-purple-300 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link href="/" target="_blank" className="flex justify-center items-center text-purple-300 bg-gray-200 hover:text-gray-200 hover:bg-purple-300 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li> */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-300 text-sm mr-4">&copy; Trakfy.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
