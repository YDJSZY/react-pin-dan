/**
 * Created by luwenwei on 17/11/25.
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 36,
            propWhiteList: [],
            //remUnit:36
        })
        //require('px2rem')()
    ]
    /*parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {}
    }*/
}