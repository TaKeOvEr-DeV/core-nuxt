import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
const version = "32323";
export default defineNuxtModule({
    setup() {
        extendViteConfig((config) => {
            console.log(config.build)
            // config.optimizeDeps = config.optimizeDeps || {}
            // config.optimizeDeps.include = config.optimizeDeps.include || []
            // config.optimizeDeps.include.push('cross-fetch')

            config.build.rollupOptions = {
                ...config.build.rollupOptions,
                output: {
                    // archivo assets 
                    assetFileNames: (assetInfo) => {
                        const name = assetInfo.name ?? "";
                        const fileNameSection = name?.split("");
                        const medium = Math.trunc(fileNameSection.length / 2);
                        const sectionFirts = medium % 2 == 0 ? fileNameSection.slice(0, medium).reverse().join("") + "f" : fileNameSection.slice(medium).reverse().join("") + "s";
                        if (name.endsWith(".css")) {
                            return `css/${sectionFirts}_[hash]${version}.css`; // Carpeta y formato para archivos  css
                        }
                        else {

                            const extension = name.split(".");
                            return `assets/a${sectionFirts}_[hash]${version}.${extension[extension.length - 1]}`; // Carpeta y formato para archivos extension

                        }
                    },
                    //Archivo js type assets
                    chunkFileNames: (chunkInfo) => {
                        const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
                        let name = "";
                        if (facadeModuleId[facadeModuleId.length - 2]) {
                            const arrayName = facadeModuleId[facadeModuleId.length - 2];
                            const fileNameSection = arrayName.split("");
                            const medium = Math.trunc(fileNameSection.length / 2);
                            const sectionFirts = medium % 2 == 0 ? fileNameSection.slice(0, medium).reverse().join("") + "f" : fileNameSection.slice(medium).reverse().join("") + "s";
                            const finalName = `[hash]m${sectionFirts}`;
                            name = finalName;
                        } else {

                            const arrayName = chunkInfo.name.split("");
                            const medium = Math.trunc(arrayName.length / 2);
                            const sectionFirts = medium % 2 == 0 ? arrayName.slice(0, medium).reverse().join("") + "fn" : arrayName.slice(medium).reverse().join("") + "sn";

                            name = `s[hash]${sectionFirts}`;
                        }

                        return `js/chunk_${name}.[hash]${version}.js`;
                    },
                    entryFileNames: () => {

                        //Archivo js principal 
                        return `js/chunkMain__[name]-[hash]${version}.js`;
                    },
                },

            }
        })
    }
})