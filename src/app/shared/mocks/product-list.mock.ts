import { IProductList } from "../interfaces/ProductList";

export const ProductList: IProductList[] = [
    {
        id: 1,
        name: 'Bolos e Tortas',
        route: 'cake',
        products: [
            {
                id: 1,
                title: 'Bolo de Aniversário',
                description: 'Bolo de aniversário delicioso, feito com ingredientes e qualidade e muito carinho! Personalizamos sabores, recheios e decoração.',
                imageUrl: 'bolo-aniversario.png',
                price: 70,
                unit: 'Kg'
            },
            {
                id: 2,
                title: 'Bolo Confeitado',
                description: 'Bolo confeitado, feito com ingredientes selecionados e acabamento impecável! Ideal para deixar qualquer ocasião mais especial, com sabor e beleza.',
                imageUrl: 'bolo-confeitado.jpg',
                price: 65,
                unit: 'Kg'
            },
            {
                id: 3,
                title: 'Bolo Caseiro',
                description: 'Bolo caseiro fofinho e saboroso, feito com aquele gostinho de receita de família! Perfeito para o café da tarde ou qualquer momento especial.',
                imageUrl: 'bolo-caseiro.jpg',
                price: 30,
                unit: 'Kg'
            },
            {
                id: 4,
                title: 'Torta de Morango',
                description: 'Torta de morango irresistível, feita com massa leve, creme suave e morangos fresquinhos! Perfeita para adoçar qualquer ocasião com muito sabor.',
                imageUrl: 'torta-morango.png',
                price: 30,
                unit: 'Kg'
            },
            {
                id: 5,
                title: 'Torta de Limão',
                description: 'Torta de limão deliciosa, com o equilíbrio perfeito entre o azedinho do limão e a doçura do creme! Massa crocante e cobertura leve que derrete na boca.',
                imageUrl: 'torta-limao.png',
                price: 30,
                unit: 'Kg'
            },
        ]
    },
    {
        id: 2,
        name: 'Cupcakes',
        route: 'cupcake',
        products: [
            {
                id: 1,
                title: 'Cupcake Personalizado',
                description: 'Cupcakes personalizados, criados com todo cuidado e ingredientes selecionados para deixar sua comemoração única, encantadora e ainda mais deliciosa',
                imageUrl: 'cupcake-personalizado.png',
                price: 7,
                unit: 'unidade'
            },
            {
                id: 2,
                title: 'Cupcake Confeitado',
                description: 'Cupcakes confeitados, macios e irresistíveis, feitos com ingredientes de qualidade para deixar qualquer momento ainda mais doce e especial.',
                imageUrl: 'cupcake-simples.jpg',
                price: 5,
                unit: 'unidade'
            },
        ]
    },
    {
        id: 3,
        name: 'Doces',
        route: 'candy',
        products: [
            {
                id: 1,
                title: 'Pão de Mel',
                description: 'Pães de mel macios e recheados, com sabor irresistível e aquele toque caseiro que conquista em cada mordida. Perfeitos para qualquer ocasião',
                imageUrl: 'pao-de-mel.jpg',
                price: 7,
                unit: 'unidade'
            },
            {
                id: 2,
                title: 'Mini Brownie',
                description: 'Mini brownies macios, intensos e irresistíveis, feitos com chocolate de qualidade para adoçar qualquer momento.',
                imageUrl: 'brownies.jpg',
                price: 70,
                unit: 'cento'
            },
            {
                id: 3,
                title: 'Brigadeiro',
                description: 'Brigadeiros cremosos e irresistíveis, feitos com ingredientes de qualidade para deixar qualquer momento mais doce e especial.',
                imageUrl: 'brigadeiros.jpg',
                price: 70,
                unit: 'cento'
            },
            {
                id: 4,
                title: 'Beijinho',
                description: 'Beijinhos macios e delicados, feitos com coco fresco de qualidade e aquele sabor irresistível que encanta em cada mordida.',
                imageUrl: 'beijinhos.jpg',
                price: 70,
                unit: 'cento'
            },
        ]
    },
    {
        id: 5,
        name: 'Salgados',
        route: 'snack',
        products: [
            {
                id: 1,
                title: 'Mini Coxinha',
                description: 'Mini coxinhas douradinhas, crocantes por fora e super recheadas por dentro, perfeitas para qualquer festa ou momento especia.',
                imageUrl: 'mini-cozinha.png',
                price: 50,
                unit: 'cento'
            },
            {
                id: 2,
                title: 'Mini Kibe',
                description: 'Mini kibes crocantes por fora e macios por dentro, temperados na medida certa para deixar qualquer momento ainda mais saboroso.',
                imageUrl: 'mini-kibe.jpg',
                price: 50,
                unit: 'cento'
            },
        ]
    },
];