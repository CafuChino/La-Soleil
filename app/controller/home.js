'use strict';
const { registerFont, createCanvas } = require('canvas');
registerFont('./fonts/typopro.ttf', { family: 'typopro' });
registerFont('./fonts/sans.otf', { family: 'sans' });
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.ejs', {
      title: 'La Soleil',
    });
  }
  async pic() {
    const { ctx } = this;
    let { x, y } = ctx.params;
    let { text, textColor, background, sans } = ctx.query;
    x = Math.abs(parseInt(x));
    y = Math.abs(parseInt(y));
    if (!x || !y) {
      ctx.throw(400);
    }
    if (x > 2000 || y > 2000) {
      ctx.throw(400);
    }
    if (!text) {
      text = `${x}x${y}`;
    }
    const fontSize = x / text.length * 1.3;
    const canvas = createCanvas(x, y);
    const canvasCtx = canvas.getContext('2d');
    if (background) {
      canvasCtx.fillStyle = '#' + background;
    } else {
      canvasCtx.fillStyle = 'rgb(40,40,40)';
    }
    canvasCtx.fillRect(0, 0, x, y);
    if (sans) {
      canvasCtx.font = `${fontSize * 0.6}px sans`;
    } else {
      canvasCtx.font = `${fontSize}px typopro`;
    }
    canvasCtx.textAlign = 'center';
    if (textColor) {
      canvasCtx.fillStyle = '#' + textColor;
    } else {
      canvasCtx.fillStyle = 'rgb(234,224,208)';
    }
    canvasCtx.fillText(text, parseInt(x / 2), parseInt(y / 2) + 0.3 * fontSize);
    const buf = canvas.toBuffer('image/jpeg', { quality: 1 });
    ctx.type = 'image/jpeg';
    ctx.body = buf;
  }
}

module.exports = HomeController;
