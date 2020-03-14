export const Types = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT: 'list/DELETE_PRODUCT',
    TOGGLE_PRODUCT: 'list/TOGGLE_PRODUCT',
    UPDATE_PRODUCT: 'list/UPDATE-PRODUCT',
    NEW_LIST: 'list/NEW_LIST',
    GET_IMAGE_SUCCSESS: 'list/GET_IMAGE_SUCCSESS',
    GET_IMAGE_FAILULE: 'list/GET_IMAGE_FAILURE'

}
export const Creators = {
    addProduct: (product, list) => ({
        type: Types.ADD_PRODUCT,
        product,
        list,
    }),

    deleteProduct: productId => ({
        type: Types.DELETE_PRODUCT,
        productId
    }),

    toggleProduct: productId => ({
        type: Types.TOGGLE_PRODUCT,
        productId
    }),

    updateProduct: (product, list) => ({
        type: Types.UPDATE_PRODUCT,
        product,
        list
    }),

    newList: () => ({
        type: Types.NEW_LIST
    }),

    getImageSuccess: (product, img) => ({
        type: Types.GET_IMAGE_SUCCSESS,
        product,
        img
    }),

    getImageFailure: (product, img) => ({
        type: Types.GET_IMAGE_FAILULE,
        product,
        img
    })


}

