const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 900; //px
const height = 900; //px
const canvasRenderService = new ChartJSNodeCanvas({width, height});

exports.encode = async function encodeChart(configuration)  {
    const dataUrl = await canvasRenderService.renderToDataURL(configuration);
    try{
        return dataUrl;
    }
    catch (e) {
        return e;
    }
};