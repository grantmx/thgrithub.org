module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, buildId}){
        return{
            '/': {
                page: "/"
            }
        }
    }
};
