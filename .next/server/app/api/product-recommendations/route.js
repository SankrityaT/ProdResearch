"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/product-recommendations/route";
exports.ids = ["app/api/product-recommendations/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct-recommendations%2Froute&page=%2Fapi%2Fproduct-recommendations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct-recommendations%2Froute.ts&appDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct-recommendations%2Froute&page=%2Fapi%2Fproduct-recommendations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct-recommendations%2Froute.ts&appDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sankritya_Documents_ProdAI_src_app_api_product_recommendations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/product-recommendations/route.ts */ \"(rsc)/./src/app/api/product-recommendations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product-recommendations/route\",\n        pathname: \"/api/product-recommendations\",\n        filename: \"route\",\n        bundlePath: \"app/api/product-recommendations/route\"\n    },\n    resolvedPagePath: \"/Users/sankritya/Documents/ProdAI/src/app/api/product-recommendations/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sankritya_Documents_ProdAI_src_app_api_product_recommendations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/product-recommendations/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0LXJlY29tbWVuZGF0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0LXJlY29tbWVuZGF0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhbmtyaXR5YSUyRkRvY3VtZW50cyUyRlByb2RBSSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzYW5rcml0eWElMkZEb2N1bWVudHMlMkZQcm9kQUkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZGlnaS8/ZWJjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2Fua3JpdHlhL0RvY3VtZW50cy9Qcm9kQUkvc3JjL2FwcC9hcGkvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NhbmtyaXR5YS9Eb2N1bWVudHMvUHJvZEFJL3NyYy9hcHAvYXBpL3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9kdWN0LXJlY29tbWVuZGF0aW9ucy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct-recommendations%2Froute&page=%2Fapi%2Fproduct-recommendations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct-recommendations%2Froute.ts&appDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/product-recommendations/route.ts":
/*!******************************************************!*\
  !*** ./src/app/api/product-recommendations/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst SERPAPI_KEY = process.env.SERPAPI_KEY;\nconst GROQ_API_KEY = process.env.GROQ_API_KEY;\nasync function invokeGroqAI(prompt) {\n    try {\n        const response = await fetch(\"https://api.groq.com/openai/v1/chat/completions\", {\n            method: \"POST\",\n            headers: {\n                Authorization: `Bearer ${GROQ_API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                model: \"mixtral-8x7b-32768\",\n                messages: [\n                    {\n                        role: \"user\",\n                        content: prompt\n                    }\n                ],\n                max_tokens: 1000,\n                temperature: 0.7\n            })\n        });\n        if (response.ok) {\n            return await response.json();\n        } else {\n            console.error(\"Groq API returned an error:\", response.statusText);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error invoking Groq AI:\", error);\n        return null;\n    }\n}\nasync function generateFitScoreAndProsCons(product, userPreferences) {\n    const prompt = `\n        You are an AI product analyst. Given the following product details and user preferences, analyze the product to provide a fit score from 1 to 10 and summarize up to 3 pros and 3 cons.\n        Product: ${JSON.stringify(product)}\n        User Preferences: - Budget Range: $${userPreferences.budget[0]} - $${userPreferences.budget[1]}\n        Desired Features: ${userPreferences.features.join(\", \")}\n\n        Consider the following factors when calculating the fit score:\n        1. How well the product's price fits within the user's budget range\n        2. How many of the user's desired features are present or relevant to the product\n        3. The overall quality and ratings of the product\n        Respond in a JSON format with the keys \"score\", \"explanation\", \"pros\", and \"cons\".\n    `;\n    const response = await invokeGroqAI(prompt);\n    // Check if response and choices are valid before attempting to parse\n    if (response && response.choices && response.choices[0].message.content) {\n        try {\n            return JSON.parse(response.choices[0].message.content);\n        } catch (error) {\n            console.error(\"Error parsing JSON response from Groq AI:\", error);\n            return {\n                score: 0,\n                explanation: \"Error generating fit score\",\n                pros: [],\n                cons: []\n            };\n        }\n    } else {\n        console.error(\"Invalid or empty response from Groq AI:\", response);\n        return {\n            score: 0,\n            explanation: \"No response from Groq AI\",\n            pros: [],\n            cons: []\n        };\n    }\n}\nasync function searchProducts(query, budget, numResults = 5, maxPosition = 10) {\n    const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(query)}&num=${numResults}&price=${budget[0]}..${budget[1]}&currency=USD&api_key=${SERPAPI_KEY}`;\n    try {\n        const response = await fetch(url);\n        const data = await response.json();\n        // Log the entire response for debugging\n        console.log(\"Raw API response:\", data);\n        if (!data.shopping_results) {\n            throw new Error(\"No shopping results found.\");\n        }\n        return data.shopping_results.filter((item, index)=>{\n            const price = parseFloat(item.extracted_price);\n            return !isNaN(price) && price >= budget[0] && price <= budget[1] && item.position <= maxPosition;\n        }).map((item)=>({\n                name: item.title || \"N/A\",\n                price: item.price || \"N/A\",\n                extractedPrice: parseFloat(item.extracted_price) || 0,\n                rating: item.rating || \"N/A\",\n                reviews: item.reviews || \"N/A\",\n                image: item.thumbnail || \"N/A\",\n                link: item.product_link || item.link || \"N/A\",\n                description: item.snippet || \"N/A\"\n            }));\n    } catch (error) {\n        console.error(\"Error fetching search results:\", error);\n        return [];\n    }\n}\nasync function POST(request) {\n    const { searchQuery, preferences, page = 1, pageSize = 5 } = await request.json();\n    if (!searchQuery || !preferences || !preferences.budget || preferences.budget.length !== 2) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid request data\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const allProducts = await searchProducts(searchQuery, preferences.budget);\n        const startIndex = (page - 1) * pageSize;\n        const productsForCurrentPage = allProducts.slice(startIndex, startIndex + pageSize);\n        const processedResults = await Promise.all(productsForCurrentPage.map(async (product)=>{\n            const analysis = await generateFitScoreAndProsCons(product, preferences);\n            return {\n                ...product,\n                fitScore: analysis.score / 10,\n                ...analysis\n            };\n        }));\n        processedResults.sort((a, b)=>b.fitScore - a.fitScore);\n        processedResults.slice(0, 3).forEach((product)=>product.isBestMatch = true);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            products: processedResults,\n            totalProducts: allProducts.length,\n            currentPage: page,\n            totalPages: Math.ceil(allProducts.length / pageSize)\n        });\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unexpected error\",\n            details: error.toString()\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0LXJlY29tbWVuZGF0aW9ucy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUUxQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsTUFBTUcsZUFBZUYsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBRTdDLGVBQWVDLGFBQWFDLE1BQWM7SUFDdEMsSUFBSTtRQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtREFBbUQ7WUFDNUVDLFFBQVE7WUFDUkMsU0FBUztnQkFDTEMsZUFBZSxDQUFDLE9BQU8sRUFBRVAsYUFBYSxDQUFDO2dCQUN2QyxnQkFBZ0I7WUFDcEI7WUFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsT0FBTztnQkFDUEMsVUFBVTtvQkFBQzt3QkFBRUMsTUFBTTt3QkFBUUMsU0FBU1o7b0JBQU87aUJBQUU7Z0JBQzdDYSxZQUFZO2dCQUNaQyxhQUFhO1lBQ2pCO1FBQ0o7UUFFQSxJQUFJYixTQUFTYyxFQUFFLEVBQUU7WUFDYixPQUFPLE1BQU1kLFNBQVNlLElBQUk7UUFDOUIsT0FBTztZQUNIQyxRQUFRQyxLQUFLLENBQUMsK0JBQStCakIsU0FBU2tCLFVBQVU7WUFDaEUsT0FBTztRQUNYO0lBQ0osRUFBRSxPQUFPRCxPQUFPO1FBQ1pELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU87SUFDWDtBQUNKO0FBRUEsZUFBZUUsNEJBQTRCQyxPQUFZLEVBQUVDLGVBQW9CO0lBQ3pFLE1BQU10QixTQUFTLENBQUM7O2lCQUVILEVBQUVPLEtBQUtDLFNBQVMsQ0FBQ2EsU0FBUzsyQ0FDQSxFQUFFQyxnQkFBZ0JDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFRCxnQkFBZ0JDLE1BQU0sQ0FBQyxFQUFFLENBQUM7MEJBQzdFLEVBQUVELGdCQUFnQkUsUUFBUSxDQUFDQyxJQUFJLENBQUMsTUFBTTs7Ozs7OztJQU81RCxDQUFDO0lBQ0QsTUFB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RCxhQUFhLENBQUNMLE9BQU8sS0FBS0M7UUFDaEMsTUFBTUsseUJBQXlCRixZQUFZRyxLQUFLLENBQUNGLFlBQVlBLGFBQWFKO1FBRTFFLE1BQU1PLG1CQUFtQixNQUFNQyxRQUFRQyxHQUFHLENBQ3RDSix1QkFBdUJ0QixHQUFHLENBQUMsT0FBTzlCO1lBQzlCLE1BQU15RCxXQUFXLE1BQU0xRCw0QkFBNEJDLFNBQVM2QztZQUM1RCxPQUFPO2dCQUFFLEdBQUc3QyxPQUFPO2dCQUFFMEQsVUFBVUQsU0FBU2pELEtBQUssR0FBRztnQkFBSSxHQUFHaUQsUUFBUTtZQUFDO1FBQ3BFO1FBR0pILGlCQUFpQkssSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVILFFBQVEsR0FBR0UsRUFBRUYsUUFBUTtRQUN2REosaUJBQWlCRCxLQUFLLENBQUMsR0FBRyxHQUFHUyxPQUFPLENBQUMsQ0FBQzlELFVBQWFBLFFBQVErRCxXQUFXLEdBQUc7UUFFekUsT0FBTzFGLHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDO1lBQ3JCcUUsVUFBVVY7WUFDVlcsZUFBZWYsWUFBWUYsTUFBTTtZQUNqQ2tCLGFBQWFwQjtZQUNicUIsWUFBWUMsS0FBS0MsSUFBSSxDQUFDbkIsWUFBWUYsTUFBTSxHQUFHRDtRQUMvQztJQUNKLEVBQUUsT0FBT2xELE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU94QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFRSxPQUFPO1lBQW9CeUUsU0FBUyxNQUFpQkMsUUFBUTtRQUFHLEdBQUc7WUFBRXRCLFFBQVE7UUFBSTtJQUNoSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZGlnaS8uL3NyYy9hcHAvYXBpL3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zL3JvdXRlLnRzP2VhYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmNvbnN0IFNFUlBBUElfS0VZID0gcHJvY2Vzcy5lbnYuU0VSUEFQSV9LRVlcbmNvbnN0IEdST1FfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdST1FfQVBJX0tFWVxuXG5hc3luYyBmdW5jdGlvbiBpbnZva2VHcm9xQUkocHJvbXB0OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5ncm9xLmNvbS9vcGVuYWkvdjEvY2hhdC9jb21wbGV0aW9ucycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtHUk9RX0FQSV9LRVl9YCxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb2RlbDogJ21peHRyYWwtOHg3Yi0zMjc2OCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgICAgIG1heF90b2tlbnM6IDEwMDAsXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignR3JvcSBBUEkgcmV0dXJuZWQgYW4gZXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnZva2luZyBHcm9xIEFJOicsIGVycm9yKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVGaXRTY29yZUFuZFByb3NDb25zKHByb2R1Y3Q6IGFueSwgdXNlclByZWZlcmVuY2VzOiBhbnkpIHtcbiAgICBjb25zdCBwcm9tcHQgPSBgXG4gICAgICAgIFlvdSBhcmUgYW4gQUkgcHJvZHVjdCBhbmFseXN0LiBHaXZlbiB0aGUgZm9sbG93aW5nIHByb2R1Y3QgZGV0YWlscyBhbmQgdXNlciBwcmVmZXJlbmNlcywgYW5hbHl6ZSB0aGUgcHJvZHVjdCB0byBwcm92aWRlIGEgZml0IHNjb3JlIGZyb20gMSB0byAxMCBhbmQgc3VtbWFyaXplIHVwIHRvIDMgcHJvcyBhbmQgMyBjb25zLlxuICAgICAgICBQcm9kdWN0OiAke0pTT04uc3RyaW5naWZ5KHByb2R1Y3QpfVxuICAgICAgICBVc2VyIFByZWZlcmVuY2VzOiAtIEJ1ZGdldCBSYW5nZTogJCR7dXNlclByZWZlcmVuY2VzLmJ1ZGdldFswXX0gLSAkJHt1c2VyUHJlZmVyZW5jZXMuYnVkZ2V0WzFdfVxuICAgICAgICBEZXNpcmVkIEZlYXR1cmVzOiAke3VzZXJQcmVmZXJlbmNlcy5mZWF0dXJlcy5qb2luKCcsICcpfVxuXG4gICAgICAgIENvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZmFjdG9ycyB3aGVuIGNhbGN1bGF0aW5nIHRoZSBmaXQgc2NvcmU6XG4gICAgICAgIDEuIEhvdyB3ZWxsIHRoZSBwcm9kdWN0J3MgcHJpY2UgZml0cyB3aXRoaW4gdGhlIHVzZXIncyBidWRnZXQgcmFuZ2VcbiAgICAgICAgMi4gSG93IG1hbnkgb2YgdGhlIHVzZXIncyBkZXNpcmVkIGZlYXR1cmVzIGFyZSBwcmVzZW50IG9yIHJlbGV2YW50IHRvIHRoZSBwcm9kdWN0XG4gICAgICAgIDMuIFRoZSBvdmVyYWxsIHF1YWxpdHkgYW5kIHJhdGluZ3Mgb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgUmVzcG9uZCBpbiBhIEpTT04gZm9ybWF0IHdpdGggdGhlIGtleXMgXCJzY29yZVwiLCBcImV4cGxhbmF0aW9uXCIsIFwicHJvc1wiLCBhbmQgXCJjb25zXCIuXG4gICAgYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW52b2tlR3JvcUFJKHByb21wdClcblxuICAgIC8vIENoZWNrIGlmIHJlc3BvbnNlIGFuZCBjaG9pY2VzIGFyZSB2YWxpZCBiZWZvcmUgYXR0ZW1wdGluZyB0byBwYXJzZVxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jaG9pY2VzICYmIHJlc3BvbnNlLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZSBmcm9tIEdyb3EgQUk6JywgZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4geyBzY29yZTogMCwgZXhwbGFuYXRpb246ICdFcnJvciBnZW5lcmF0aW5nIGZpdCBzY29yZScsIHByb3M6IFtdLCBjb25zOiBbXSB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG9yIGVtcHR5IHJlc3BvbnNlIGZyb20gR3JvcSBBSTonLCByZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IDAsIGV4cGxhbmF0aW9uOiAnTm8gcmVzcG9uc2UgZnJvbSBHcm9xIEFJJywgcHJvczogW10sIGNvbnM6IFtdIH1cbiAgICB9XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdHMocXVlcnk6IHN0cmluZywgYnVkZ2V0OiBbbnVtYmVyLCBudW1iZXJdLCBudW1SZXN1bHRzID0gNSwgbWF4UG9zaXRpb24gPSAxMCkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3NlcnBhcGkuY29tL3NlYXJjaC5qc29uP2VuZ2luZT1nb29nbGVfc2hvcHBpbmcmcT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9Jm51bT0ke251bVJlc3VsdHN9JnByaWNlPSR7YnVkZ2V0WzBdfS4uJHtidWRnZXRbMV19JmN1cnJlbmN5PVVTRCZhcGlfa2V5PSR7U0VSUEFQSV9LRVl9YFxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgICAgICAvLyBMb2cgdGhlIGVudGlyZSByZXNwb25zZSBmb3IgZGVidWdnaW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdSYXcgQVBJIHJlc3BvbnNlOicsIGRhdGEpXG5cbiAgICAgICAgaWYgKCFkYXRhLnNob3BwaW5nX3Jlc3VsdHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2hvcHBpbmcgcmVzdWx0cyBmb3VuZC4nKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2hvcHBpbmdfcmVzdWx0c1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KGl0ZW0uZXh0cmFjdGVkX3ByaWNlKVxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4ocHJpY2UpICYmIHByaWNlID49IGJ1ZGdldFswXSAmJiBwcmljZSA8PSBidWRnZXRbMV0gJiYgaXRlbS5wb3NpdGlvbiA8PSBtYXhQb3NpdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlIHx8ICdOL0EnLFxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlIHx8ICdOL0EnLFxuICAgICAgICAgICAgICAgIGV4dHJhY3RlZFByaWNlOiBwYXJzZUZsb2F0KGl0ZW0uZXh0cmFjdGVkX3ByaWNlKSB8fCAwLFxuICAgICAgICAgICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcgfHwgJ04vQScsXG4gICAgICAgICAgICAgICAgcmV2aWV3czogaXRlbS5yZXZpZXdzIHx8ICdOL0EnLFxuICAgICAgICAgICAgICAgIGltYWdlOiBpdGVtLnRodW1ibmFpbCB8fCAnTi9BJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLnByb2R1Y3RfbGluayB8fCBpdGVtLmxpbmsgfHwgJ04vQScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uc25pcHBldCB8fCAnTi9BJyxcbiAgICAgICAgICAgIH0pKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlYXJjaCByZXN1bHRzOicsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIGNvbnN0IHsgc2VhcmNoUXVlcnksIHByZWZlcmVuY2VzLCBwYWdlID0gMSwgcGFnZVNpemUgPSA1IH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuXG4gICAgaWYgKCFzZWFyY2hRdWVyeSB8fCAhcHJlZmVyZW5jZXMgfHwgIXByZWZlcmVuY2VzLmJ1ZGdldCB8fCBwcmVmZXJlbmNlcy5idWRnZXQubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCByZXF1ZXN0IGRhdGEnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxQcm9kdWN0cyA9IGF3YWl0IHNlYXJjaFByb2R1Y3RzKHNlYXJjaFF1ZXJ5LCBwcmVmZXJlbmNlcy5idWRnZXQpXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogcGFnZVNpemVcbiAgICAgICAgY29uc3QgcHJvZHVjdHNGb3JDdXJyZW50UGFnZSA9IGFsbFByb2R1Y3RzLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSlcblxuICAgICAgICBjb25zdCBwcm9jZXNzZWRSZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBwcm9kdWN0c0ZvckN1cnJlbnRQYWdlLm1hcChhc3luYyAocHJvZHVjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBhd2FpdCBnZW5lcmF0ZUZpdFNjb3JlQW5kUHJvc0NvbnMocHJvZHVjdCwgcHJlZmVyZW5jZXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJvZHVjdCwgZml0U2NvcmU6IGFuYWx5c2lzLnNjb3JlIC8gMTAsIC4uLmFuYWx5c2lzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcblxuICAgICAgICBwcm9jZXNzZWRSZXN1bHRzLnNvcnQoKGEsIGIpID0+IGIuZml0U2NvcmUgLSBhLmZpdFNjb3JlKVxuICAgICAgICBwcm9jZXNzZWRSZXN1bHRzLnNsaWNlKDAsIDMpLmZvckVhY2goKHByb2R1Y3QpID0+IChwcm9kdWN0LmlzQmVzdE1hdGNoID0gdHJ1ZSkpXG5cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9jZXNzZWRSZXN1bHRzLFxuICAgICAgICAgICAgdG90YWxQcm9kdWN0czogYWxsUHJvZHVjdHMubGVuZ3RoLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoYWxsUHJvZHVjdHMubGVuZ3RoIC8gcGFnZVNpemUpLFxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuZXhwZWN0ZWQgZXJyb3InLCBkZXRhaWxzOiAoZXJyb3IgYXMgRXJyb3IpLnRvU3RyaW5nKCkgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJTRVJQQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJHUk9RX0FQSV9LRVkiLCJpbnZva2VHcm9xQUkiLCJwcm9tcHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1heF90b2tlbnMiLCJ0ZW1wZXJhdHVyZSIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJnZW5lcmF0ZUZpdFNjb3JlQW5kUHJvc0NvbnMiLCJwcm9kdWN0IiwidXNlclByZWZlcmVuY2VzIiwiYnVkZ2V0IiwiZmVhdHVyZXMiLCJqb2luIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJwYXJzZSIsInNjb3JlIiwiZXhwbGFuYXRpb24iLCJwcm9zIiwiY29ucyIsInNlYXJjaFByb2R1Y3RzIiwicXVlcnkiLCJudW1SZXN1bHRzIiwibWF4UG9zaXRpb24iLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhIiwibG9nIiwic2hvcHBpbmdfcmVzdWx0cyIsIkVycm9yIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiZXh0cmFjdGVkX3ByaWNlIiwiaXNOYU4iLCJwb3NpdGlvbiIsIm1hcCIsIm5hbWUiLCJ0aXRsZSIsImV4dHJhY3RlZFByaWNlIiwicmF0aW5nIiwicmV2aWV3cyIsImltYWdlIiwidGh1bWJuYWlsIiwibGluayIsInByb2R1Y3RfbGluayIsImRlc2NyaXB0aW9uIiwic25pcHBldCIsIlBPU1QiLCJyZXF1ZXN0Iiwic2VhcmNoUXVlcnkiLCJwcmVmZXJlbmNlcyIsInBhZ2UiLCJwYWdlU2l6ZSIsImxlbmd0aCIsInN0YXR1cyIsImFsbFByb2R1Y3RzIiwic3RhcnRJbmRleCIsInByb2R1Y3RzRm9yQ3VycmVudFBhZ2UiLCJzbGljZSIsInByb2Nlc3NlZFJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwiYW5hbHlzaXMiLCJmaXRTY29yZSIsInNvcnQiLCJhIiwiYiIsImZvckVhY2giLCJpc0Jlc3RNYXRjaCIsInByb2R1Y3RzIiwidG90YWxQcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiZGV0YWlscyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/product-recommendations/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct-recommendations%2Froute&page=%2Fapi%2Fproduct-recommendations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct-recommendations%2Froute.ts&appDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsankritya%2FDocuments%2FProdAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();