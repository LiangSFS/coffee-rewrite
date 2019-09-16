/**
 *  Created by liangsfs on 2019-09-16
 */

import './iconfont.js'

const svgAll = require.context('.', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)

requireAll(svgAll)
