import { createServer } from "miragejs";

let products = [

    {
        "name": "GTX 1650 Asus NVIDIA GeForce, 4GB GDDR6",
        "code": "135256",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/135256/placa-de-video-asus-nvidia-geforce-gtx-1650-12-gbps-4gb-gddr6-tuf-gtx1650-4gd6-gaming_1609855630_gg.jpg",
        "sales": 150,
        "price": 1199.99,
        "stock": 200

    },

    {
        "name": "GTX 1660 SC Ultra Gaming EVGA NVIDIA GeForce 6GB, GDDR5",
        "code": "102130",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/102130/placa-de-video-evga-nvidia-geforce-gtx-1660-sc-ultra-gaming-6gb-gddr5-06g-p4-1067-kr_placa-de-video-evga-nvidia-geforce-gtx-1660-sc-ultra-gaming-6gb-gddr5-06g-p4-1067-kr_1560799756_gg.jpg",
        "sales": 50,
        "price": 1499.99,
        "stock": 233

    },

    {
        "name": "GTX 1660 Super Twin Fan Zotac Gaming NVIDIA GeForce, 6 GB GDDR6",
        "code": "110396",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/110396/placa-de-video-zotac-gaming-nvidia-geforce-gtx-1660-super-twin-fan-6gb-gddr6-zt-t16620f-10l_1582210172_gg.jpg",
        "sales": 100,
        "price": 1499.99,
        "stock": 20

    },

    {
        "name": "Zotac Gaming NVIDIA GeForce RTX 2060, 6GB, GDDR6",
        "code": "110397",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/110397/placa-de-video-zotac-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-zt-t20600h-10m_1582213398_gg.jpg",
        "sales": 200,
        "price": 2099.99,
        "stock": 300

    },

    {
        "name": "RTX 3060 Asus DUAL O12G V2 NVIDIA GeForce, LHR, 12GB GDDR6",
        "code": "164854",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_gg.jpg",
        "sales": 250,
        "price": 2501.99,
        "stock": 10

    },

    {
        "name": "RTX 3060 Ti 1-Click OC Galax NVIDIA GeForce, 8GB, GDDR6",
        "code": "191789",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/191789/placa-de-video-galax-nvidia-geforce-rtx-3060-ti-1-click-oc-14-gbps-8gb-gddr6-lhr-dlss-ray-tracing-preto-36isl6md1vqw_1629400274_gg.jpg",
        "sales": 150,
        "price": 2999.99,
        "stock": 200

    },

    {
        "name": "RX 580 PowerColor Red Dragon AMD Radeon, 8GB GDDR5",
        "code": "382632",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/382632/placa-de-video-powercolor-red-dragon-amd-radeon-rx-580-8gb-gddr5-axrx-580-8gbd5-dhd_1666194882_gg.jpg",
        "sales": 5,
        "price": 1199.99,
        "stock": 500

    },

    {
        "name": "AMD Radeon RX 6700 XT Eagle, 12GB GDDR6",
        "code": "387409",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/387409/placa-de-video-gigabyte-amd-radeon-rx-6700-xt-eagle-12gb-gddr6-rgb-ray-tracing-gv-r67xteagle-12gd_1666194470_gg.jpg",
        "sales": 105,
        "price": 2599.99,
        "stock": 20

    },

    {
        "name": "RX 6650 XT XFX Speedster QICK308 AMD Radeon Ultra Gaming, 8GB GDDR6",
        "code": "353519",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/191789/placa-de-video-galax-nvidia-geforce-rtx-3060-ti-1-click-oc-14-gbps-8gb-gddr6-lhr-dlss-ray-tracing-preto-36isl6md1vqw_1629400274_gg.jpg",
        "sales": 80,
        "price": 2732.99,
        "stock": 10

    },

    {
        "name": "RX 6900 XT ASRock AMD Radeon Graphics, 16GB GDDR6, PCI Express 4.0",
        "code": "136468",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/136468/placa-de-video-asrock-amd-radeon-rx-6900-xt-graphics-16-gbps-16gb-gddr6-pci-express-4-0-hardware-raytracing-rx6900xt-pgd-16go_1610646721_gg.jpg",
        "sales": 20,
        "price": 6599.99,
        "stock": 200

    },

    {
        "name": "RX 7900 XT Phantom Gaming ASRock AMD, 20 GB GDDR6",
        "code": "403271",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/403271/placa-de-video-rx-7900-xt-phantom-gaming-asrock-amd-20-gb-gddr6-argb-90-ga3xzz-00uanf_1670859739_gg.jpg",
        "sales": 10,
        "price": 7519.99,
        "stock": 200

    },

    {
        "name": "RTX 4080 XLR8 Gaming Verto Epic-x RGB PNY GeForce, 16 GB GDDR6X",
        "code": "397576",
        "imgUrl": "https://images.kabum.com.br/produtos/fotos/397576/placa-de-video-pny-geforce-rtx-4080-xlr8-gaming-verto-epic-x-rgb-16-gb-gddr6x-dlss-ray-tracing-vcg408016tfxxpb1-o_1666992885_gg.jpg",
        "sales": 150,
        "price": 9399.99,
        "stock": 200

    }

]

createServer({

    routes() {

        this.post("api/products", (schema, request) => {

            let newProduct = JSON.parse(request.requestBody)

            if (products.find(product => product.code === newProduct.code)) {

                throw new Error("Código do produto já cadastrado!")

            }

            products.push(newProduct);

            return { product: newProduct }

        })

        this.get("api/products", () => ({
            products
        }))

    },
})
  