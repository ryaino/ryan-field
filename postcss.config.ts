module.exports = (ctx: any) => ({
    parser: ctx.parser ? 'sugarss' : false,
    map: false,
    plugins: {
        'postcss-custom-media': {}
    }
})