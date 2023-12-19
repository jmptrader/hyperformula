(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{368:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),t("p",[e._v("We implemented various techniques to boost the performance of\nHyperFormula. In some cases, turning them on or off might increase\nthe performance of your app. Below we provide a number of tips on\nhow to speed it up.")]),e._v(" "),t("h2",{attrs:{id:"vlookup-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vlookup-match"}},[e._v("#")]),e._v(" VLOOKUP/MATCH")]),e._v(" "),t("p",[e._v("If you are planning to use VLOOKUP or MATCH heavily in your app,\nyou may consider enabling the "),t("code",[e._v("useColumnIndex")]),e._v(" flag in the HyperFormula\nconfiguration. It will increase memory usage but can significantly\nimprove the performance of these two functions, especially when\nrunning on unsorted or very large data sets. The column index will\nnot be used despite the option "),t("code",[e._v("useColumnIndex")]),e._v(" enabled when  using\n"),t("strong",[e._v("wildcards")]),e._v(" or "),t("strong",[e._v("regular expressions")]),e._v(".")]),e._v(" "),t("p",[e._v("Leaving this option disabled will cause the engine to use binary\nsearch when dealing with sorted data, and the naive approach otherwise.\nHowever, binary search will not be used if the size of the data being\nsearched is below a given threshold, which can be customized using the\n"),t("code",[e._v("binarySearchThreshold")]),e._v(" option in the configuration.")]),e._v(" "),t("h2",{attrs:{id:"address-mapping-strategies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#address-mapping-strategies"}},[e._v("#")]),e._v(" Address mapping strategies")]),e._v(" "),t("p",[e._v("HyperFormula uses two approaches to store the mapping of cell\naddresses in order to optimize memory usage. The choice of the\nstrategy is made independently for each sheet. The\n"),t("code",[e._v("chooseAddressMappingPolicy")]),e._v(" option allows for changing the way\nthe strategy will be chosen.")]),e._v(" "),t("p",[e._v("You may use one of three built-in policies:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("AlwaysDense")]),e._v(" – uses dense mapping for each sheet. This policy is\nparticularly useful when the spreadsheet is a densely filled rectangle.")]),e._v(" "),t("li",[t("code",[e._v("AlwaysSparse")]),e._v(" – uses sparse mapping for each sheet. This approach\nis useful when in your spreadsheet/dataset there are relatively few\ncells filled, but located very far from each other.")]),e._v(" "),t("li",[t("code",[e._v("DenseSparseChooseBasedOnThreshold")]),e._v(" – the choice is made based on\nthe fill ratio of the sheet. Let the engine choose the best strategy\nfor you.")])]),e._v(" "),t("h2",{attrs:{id:"suspending-automatic-recalculations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suspending-automatic-recalculations"}},[e._v("#")]),e._v(" Suspending automatic recalculations")]),e._v(" "),t("p",[e._v("By default, HyperFormula recalculates formulas after every change.\nHowever, due to the fact that we store the graph of dependencies\nbetween cells in the sheet, we recalculate only the cells affected\nby the update.")]),e._v(" "),t("p",[e._v("Sometimes, a simple change can cause recalculation of a large part\nof the sheet, e.g. when the modified cell is at the very beginning\nof the dependency chain or when there are many\n"),t("RouterLink",{attrs:{to:"/guide/volatile-functions.html"}},[e._v("volatile functions")]),e._v(" in the worksheet.\nIn such a case you may want to postpone the recalculation.")],1),e._v(" "),t("p",[e._v("The first option is to call "),t("code",[e._v("suspendEvaluation")]),e._v(" before making\nchanges and "),t("code",[e._v("resumeEvaluation")]),e._v(" at a convenient moment.")]),e._v(" "),t("p",[e._v("The second option is to pass the callback function with multiple\noperations to a "),t("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[e._v("batch function")]),e._v(". Recalculation\nwill be suspended before performing operations and resumed after them.\nIn cases where you perform operations which may not cause a\nrecalculation but only change the shape of the worksheet, like\n"),t("code",[e._v("addRows")]),e._v(", "),t("code",[e._v("removeRows")]),e._v(", or "),t("code",[e._v("moveColumns")]),e._v(" , we do not recommend suspending\nrecalculation, as this may have a slightly negative impact on\nperformance.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);