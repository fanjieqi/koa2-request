�}v�  z   �6r��e��8��tV��*�L��_8Y��׼kC�y}�����������+Z�c�$P�b�c��G�J�y�_�j�̹V0B�4�A����_�s����B�0�tnA'Fi�no���;(ڛ�b�8g4�2lF+��]�q*�ҽHޜ�¥�8���q#�Hr�� �=?���a��	ub��$�0Bdk�l���8�~V{�S
����Ew��C��_�Ee�0И�[� k��Mia/mK7� U<c�jZi\��w͕�h���Ǖ�x�/�M��6�����#�L����ԙ|���� ��y۠NS(�>*\�w�-�ퟱ(s�:��}�z��!���K��&��:[�	,���@\��OD�����ÂQ؍��C�����Ϋ��5�;�h"�3�AjT{*�r��¬FPڳs���\�ʴ`�V/,�2_I��y���� �mX����������>�i�f@�w��DZ���g���4�� B�%�OY;i4O�:��/�/�d','del'].indexOf(attr) > -1) {
			request[attr] = (function(attr) {
				return function (uri, options) {
                    return new Promise(function(resolve, reject) {
                        _request(uri, options, function (error, response, body) {
                            error && reject(error);
                            resolve(response, body);
                        })
                    })
				}
			})(attr);
		} else {
			request[attr] = _request[attr];
		}
	}
}

module.exports = request;