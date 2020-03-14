/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Unjam; });\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\n\nclass Unjam {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.pieces = []\n    this.drawBorder();\n    this.createPieces();\n    this.drawPieces();\n    this.inputHandlers();\n    this.keyboardInput();\n    this.reset();\n  }\n\n  drawBorder() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(420, 210);\n    this.ctx.lineTo(420, 420);\n    this.ctx.lineTo(0, 420);\n    this.ctx.lineTo(0, 0);\n    this.ctx.lineTo(420, 0);\n    this.ctx.lineTo(420, 140);\n    this.ctx.strokeStyle = \"gray\";\n    this.ctx.stroke();\n  }\n\n  drawPieces() {\n    this.startingPiece.draw();\n    this.pieces.forEach(piece => piece.draw());\n  }\n\n  createPieces() {\n    const startingValues = [\n      [1, 1, 68, 138],\n      [71, 1, 208, 68],\n      [141, 71, 68, 208],\n      [211, 71, 68, 138],\n      [211, 211, 68, 138],\n      [1, 211, 138, 68],\n      [1, 281, 68, 138],\n      [71, 351, 138, 68],\n      [211, 351, 138, 68],\n      [281, 281, 138, 68],\n    ]\n    this.startingPiece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 1, 141, 138, 68, \"red\")\n    this.pieces = [];\n    this.pieces.push(this.startingPiece)\n    startingValues.forEach((value) => {\n      this.pieces.push(new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, ...value))\n    })\n  }\n\n  inputHandlers() {\n    this.canvas.addEventListener('click', event => {\n      this.pieces.forEach(piece => {\n        if (event.offsetX > piece.x && \n          event.offsetX < piece.x + piece.width &&\n          event.offsetY > piece.y &&\n          event.offsetY < piece.y + piece.height) {\n            piece.selected = true;\n            piece.update();\n        } else {\n          piece.selected = false;\n          piece.update();\n        }\n      })\n    })\n  }\n\n  keyboardInput() {\n    document.addEventListener('keydown', event => {\n      let selectedPiece = this.pieces.find(piece => piece.selected)\n      if (selectedPiece.width > selectedPiece.height) {\n        switch (event.key) {\n          case \"ArrowLeft\":\n            if (!this.collisionLeft(selectedPiece)) {\n              selectedPiece.moveLeft();\n            }\n            break;\n          case \"ArrowRight\":\n            if (!this.collisionRight(selectedPiece)) {\n              selectedPiece.moveRight();\n              this.isWon();\n            }\n            break;\n        }\n      } else if (selectedPiece.width < selectedPiece.height) {\n        switch (event.key) {\n          case \"ArrowUp\":\n            if (!this.collisionUp(selectedPiece)) {\n              selectedPiece.moveUp();\n            }\n            break;\n          case \"ArrowDown\":\n            if (!this.collisionDown(selectedPiece)) {\n              selectedPiece.moveDown();\n            }\n            break;\n        }\n      }\n    })\n  }\n\n  isWon() {\n    if (this.pieces[0].reachExit()) {\n      let winDiv = document.getElementById(\"win-message\");\n      winDiv.innerHTML = \"<p>YOU WON!</p>\";\n    }\n  }\n\n  collisionRight(selectedPiece) {\n    let filteredPieces = this.pieces.filter(piece => !piece.selected)\n    let collided = false;\n    filteredPieces.forEach(piece => {\n      if (selectedPiece.x + selectedPiece.width + 2 === piece.x &&\n        selectedPiece.y >= piece.y &&\n        selectedPiece.y <= piece.y + piece.height) {\n        collided = true;\n      } \n    })\n    return collided;\n  }\n\n  collisionLeft(selectedPiece) {\n    let filteredPieces = this.pieces.filter(piece => !piece.selected)\n    let collided = false;\n    filteredPieces.forEach(piece => {\n      if (selectedPiece.x - 2 === piece.x + piece.width &&\n        selectedPiece.y >= piece.y &&\n        selectedPiece.y <= piece.y + piece.height) {\n        collided = true;\n      } \n    })\n    return collided;\n  }\n\n  collisionUp(selectedPiece) {\n    let filteredPieces = this.pieces.filter(piece => !piece.selected)\n    let collided = false;\n    filteredPieces.forEach(piece => {\n      if (selectedPiece.y - 2 === piece.y + piece.height &&\n        selectedPiece.x >= piece.x &&\n        selectedPiece.x <= piece.x + piece.width) {\n        collided = true;\n      } \n    })\n    return collided;\n  }\n\n  collisionDown(selectedPiece) {\n    let filteredPieces = this.pieces.filter(piece => !piece.selected)\n    let collided = false;\n    filteredPieces.forEach(piece => {\n      if (selectedPiece.y + selectedPiece.height + 2 === piece.y &&\n        selectedPiece.x >= piece.x &&\n        selectedPiece.x <= piece.x + piece.width) {\n        collided = true;\n      } \n    })\n    return collided;\n  }\n  \n  reset() {\n    let refreshBtn = document.getElementById(\"refresh\");\n    refreshBtn.addEventListener('click', event => {\n      this.ctx.clearRect(0, 0, 420, 420);\n      this.drawBorder();\n      this.createPieces();\n      this.drawPieces();\n      let winDiv = document.getElementById(\"win-message\");\n      winDiv.innerHTML = \"\";\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById(\"game-canvas\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Piece; });\nclass Piece {\n  constructor(ctx, x, y, width, height, color) {\n    this.ctx = ctx;\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color || \"#b8782a\";\n    this.selected = false;\n  }\n\n  draw() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    this.ctx.fillStyle = this.color\n    if (this.selected && this.color !== \"red\") {\n      this.ctx.fillStyle = \"#8a571a\";\n    } else if (this.selected && this.color === \"red\") {\n      this.ctx.fillStyle = \"#c41414\"\n    }\n    this.ctx.fillRect(this.x, this.y, this.width, this.height)\n  }\n\n  update() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    this.draw();\n  }\n\n  moveRight() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    if (this.x + this.width + 70 < this.ctx.canvas.width) {\n      this.x += 70\n      this.draw();\n    } else if (this.x + this.width + 70 > this.ctx.canvas.width){\n      this.x = this.ctx.canvas.width - this.width - 1;\n      this.draw();\n    }\n  }\n\n  moveLeft() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    if (this.x - 70 > 0) {\n      this.x -= 70\n      this.draw();\n    } else if (this.x - 70 < 0) {\n      this.x = 1;\n      this.draw();\n    }\n  }\n\n  moveUp() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    if (this.y - 70 > 0) {\n      this.y -= 70\n      this.draw();\n    } else if (this.y - 70 < 0) {\n      this.y = 1;\n      this.draw();\n    }\n  }\n\n  moveDown() {\n    this.ctx.clearRect(this.x, this.y, this.width, this.height)\n    if (this.y + this.height + 70 < this.ctx.canvas.height) {\n      this.y += 70\n      this.draw();\n    } else if (this.y + this.height + 70 > this.ctx.canvas.height) {\n      this.y = this.ctx.canvas.height - this.height - 1;\n      this.draw();\n    }\n  }\n\n  reachExit() {\n    if (this.color === \"red\" && this.x === 281) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });