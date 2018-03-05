app.filter('propsOrderBy', function () {
    return function (items, props) {
        var ordered = [];
        
        angular.forEach(items, function (item) {
            ordered.push(item);
        });

        var isNum = function (v) {
            return (!isNaN(parseFloat(v)) && isFinite(v));
        };

        var keySort = function (a, b, d) {
            d = d !== null ? d : 1;
            a = isNum(a) || typeof a == 'boolean' ? a : a.toLowerCase().removerAcentos();
            b = isNum(b) || typeof b == 'boolean' ? b : b.toLowerCase().removerAcentos();

            if (a == b)
                return 0;

            return a > b ? d : -1 * d;
        };

        var keys = Object.keys(props);
        
        for (var k in keys) {            
            props[keys[k]] = props[keys[k]] == 'desc' || props[keys[k]] == -1 ? -1 : 1;
        }

        ordered.sort(function (a, b) {
            
            var sorted = 0, i = 0;

            while (sorted === 0 && i < keys.length) {
                var k = keys[i];
                if (k) {
                    var dir = props[k];
                    sorted = keySort(a[k], b[k], dir);
                    i++;
                }
            }

            return sorted;
        });

        return ordered;
    };
});

String.prototype.removerAcentos = function () {
    var str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    var str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    var nova = "";
    for (var i = 0; i < this.length; i++) {
        if (str_acento.indexOf(this.charAt(i)) != -1) {
            nova += str_sem_acento.substr(str_acento.search(this.substr(i, 1)), 1);
        } else {
            nova += this.substr(i, 1);
        }
    }
    return nova;
};
