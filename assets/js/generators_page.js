document.addEventListener('DOMContentLoaded', function(event) {
    var generateLicenseKeysProduct = jQuery('select#generate__product');
    var generateLicenseKeysOrder   = jQuery('select#generate__order');

    var productDropdownSearchConfig = {
        ajax: {
            cache: true,
            delay: 500,
            url: ajaxurl,
            method: 'POST',
            dataType: 'json',
            data: function(params) {
                return {
                    action: 'lmfwc_dropdown_search',
                    security: security.dropdownSearch,
                    term: params.term,
                    page: params.page,
                    type: 'product'
                };
            },
            processResults: function(data, params) {
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: data.pagination.more
                    }
                };
            }
        },
        placeholder: i18n.placeholderSearchProducts,
        minimumInputLength: 1,
        allowClear: true
    };
    var orderDropdownSearchConfig = {
        ajax: {
            cache: true,
            delay: 500,
            url: ajaxurl,
            method: 'POST',
            dataType: 'json',
            data: function(params) {
                return {
                    action: 'lmfwc_dropdown_search',
                    security: security.dropdownSearch,
                    term: params.term,
                    page: params.page,
                    type: 'shop_order'
                };
            },
            processResults: function(data, params) {
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: data.pagination.more
                    }
                };
            }
        },
        placeholder: i18n.placeholderSearchOrders,
        minimumInputLength: 1,
        allowClear: true
    };

    if (generateLicenseKeysProduct) {
        generateLicenseKeysProduct.select2(productDropdownSearchConfig);
    }

    if (generateLicenseKeysOrder) {
        generateLicenseKeysOrder.select2(orderDropdownSearchConfig);
    }
});