var sampleWave = [-0.08235294117647063,-0.08235294117647063,-0.05882352941176472,-0.03529411764705881,-0.0039215686274509665,0.027450980392156765,0.050980392156862786,0.07450980392156858,0.0980392156862746,0.10588235294117654,0.10588235294117654,0.11372549019607847,0.10588235294117654,0.10588235294117654,0.10588235294117654,0.10588235294117654,0.0980392156862746,0.09019607843137245,0.10588235294117654,0.1215686274509804,0.13725490196078427,0.15294117647058814,0.16862745098039222,0.19215686274509802,0.21568627450980382,0.23921568627450984,0.2549019607843137,0.2549019607843137,0.23921568627450984,0.23921568627450984,0.23921568627450984,0.23921568627450984,0.2313725490196079,0.22352941176470598,0.22352941176470598,0.21568627450980382,0.2078431372549019,0.2078431372549019,0.19999999999999996,0.17647058823529416,0.13725490196078427,0.10588235294117654,0.09019607843137245,0.07450980392156858,0.06666666666666665,0.05882352941176472,0.05882352941176472,0.06666666666666665,0.07450980392156858,0.07450980392156858,0.04313725490196085,-0.0039215686274509665,-0.04313725490196074,-0.08235294117647063,-0.11372549019607847,-0.12941176470588234,-0.12941176470588234,-0.11372549019607847,-0.10588235294117643,-0.09019607843137256,-0.08235294117647063,-0.08235294117647063,-0.10588235294117643,-0.13725490196078427,-0.17647058823529416,-0.21568627450980393,-0.2549019607843137,-0.28627450980392155,-0.3176470588235294,-0.3254901960784313,-0.33333333333333337,-0.33333333333333337,-0.33333333333333337,-0.3254901960784313,-0.3019607843137255,-0.2705882352941177,-0.21568627450980393,-0.17647058823529416,-0.16078431372549018,-0.16078431372549018,-0.17647058823529416,-0.19999999999999996,-0.23921568627450984,-0.2784313725490196,-0.30980392156862746,-0.3176470588235294,-0.30980392156862746,-0.2941176470588235,-0.2784313725490196,-0.2549019607843137,-0.2313725490196078,-0.207843137254902,-0.19215686274509802,-0.1843137254901961,-0.1843137254901961,-0.17647058823529416,-0.1686274509803921,-0.16078431372549018,-0.15294117647058825,-0.14509803921568631,-0.13725490196078427,-0.12941176470588234,-0.1215686274509804,-0.10588235294117643,-0.09019607843137256,-0.06666666666666665,-0.04313725490196074,-0.019607843137254943,-0.0039215686274509665,0.0039215686274509665,-0.0117647058823529,-0.04313725490196074,-0.07450980392156858,-0.09019607843137256,-0.10588235294117643,-0.11372549019607847,-0.1215686274509804,-0.1215686274509804,-0.11372549019607847,-0.11372549019607847,-0.11372549019607847,-0.11372549019607847,-0.11372549019607847,-0.10588235294117643,-0.10588235294117643,-0.10588235294117643,-0.09019607843137256,-0.07450980392156858,-0.06666666666666665,-0.06666666666666665,-0.05882352941176472,-0.06666666666666665,-0.07450980392156858,-0.0980392156862745,-0.1215686274509804,-0.14509803921568631,-0.15294117647058825,-0.17647058823529416,-0.19215686274509802,-0.207843137254902,-0.207843137254902,-0.1843137254901961,-0.15294117647058825,-0.12941176470588234,-0.11372549019607847,-0.10588235294117643,-0.09019607843137256,-0.08235294117647063,-0.05882352941176472,-0.04313725490196074,-0.03529411764705881,-0.03529411764705881,-0.04313725490196074,-0.06666666666666665,-0.0980392156862745,-0.12941176470588234,-0.15294117647058825,-0.16078431372549018,-0.16078431372549018,-0.13725490196078427,-0.10588235294117643,-0.08235294117647063,-0.050980392156862786,-0.0117647058823529,0.027450980392156765,0.05882352941176472,0.08235294117647052,0.1215686274509804,0.1607843137254903,0.19215686274509802,0.2078431372549019,0.21568627450980382,0.21568627450980382,0.2078431372549019,0.19999999999999996,0.19215686274509802,0.17647058823529416,0.1607843137254903,0.15294117647058814,0.1450980392156862,0.13725490196078427,0.13725490196078427,0.1450980392156862,0.15294117647058814,0.1607843137254903,0.1843137254901961,0.21568627450980382,0.2313725490196079,0.23921568627450984,0.22352941176470598,0.19999999999999996,0.19999999999999996,0.19215686274509802,0.16862745098039222,0.13725490196078427,0.11372549019607847,0.08235294117647052,0.05882352941176472,0.04313725490196085,0.04313725490196085,0.050980392156862786,0.04313725490196085,0.027450980392156765,0.0117647058823529,-0.0117647058823529,-0.04313725490196074,-0.04313725490196074,-0.03529411764705881,-0.019607843137254943,-0.0117647058823529,-0.027450980392156876,-0.04313725490196074,-0.05882352941176472,-0.06666666666666665,-0.07450980392156858,-0.09019607843137256,-0.10588235294117643,-0.13725490196078427,-0.16078431372549018,-0.17647058823529416,-0.1843137254901961,-0.19999999999999996,-0.19999999999999996,-0.19999999999999996,-0.19999999999999996,-0.1843137254901961,-0.1686274509803921,-0.13725490196078427,-0.11372549019607847,-0.11372549019607847,-0.10588235294117643,-0.10588235294117643,-0.11372549019607847,-0.1215686274509804,-0.1215686274509804,-0.1215686274509804,-0.11372549019607847,-0.10588235294117643,-0.0980392156862745,-0.07450980392156858,-0.050980392156862786,-0.027450980392156876,0.0039215686274509665,0.03529411764705892,0.06666666666666665,0.08235294117647052,0.06666666666666665,0.04313725490196085,0.019607843137254832,0.0039215686274509665,-0.0039215686274509665,-0.019607843137254943,-0.03529411764705881,-0.050980392156862786,-0.05882352941176472,-0.05882352941176472,-0.050980392156862786,-0.050980392156862786,-0.04313725490196074,-0.04313725490196074,-0.03529411764705881,-0.03529411764705881,-0.019607843137254943,-0.0117647058823529,0.0039215686274509665,0.027450980392156765,0.04313725490196085,0.050980392156862786,0.04313725490196085,0.019607843137254832,-0.019607843137254943,-0.04313725490196074,-0.04313725490196074,-0.03529411764705881,-0.03529411764705881,-0.050980392156862786,-0.06666666666666665,-0.08235294117647063,-0.09019607843137256,-0.11372549019607847,-0.1215686274509804,-0.12941176470588234,-0.13725490196078427,-0.14509803921568631,-0.16078431372549018,-0.17647058823529416,-0.1843137254901961,-0.1843137254901961,-0.17647058823529416,-0.16078431372549018,-0.13725490196078427,-0.11372549019607847,-0.09019607843137256,-0.07450980392156858,-0.07450980392156858,-0.07450980392156858,-0.08235294117647063,-0.0980392156862745,-0.1215686274509804,-0.15294117647058825,-0.17647058823529416,-0.19215686274509802,-0.19999999999999996,-0.19215686274509802,-0.1686274509803921,-0.14509803921568631,-0.1215686274509804,-0.09019607843137256,-0.050980392156862786,-0.019607843137254943,0.0039215686274509665,0.027450980392156765,0.050980392156862786,0.07450980392156858,0.08235294117647052,0.08235294117647052,0.08235294117647052,0.08235294117647052,0.0980392156862746,0.10588235294117654,0.11372549019607847,0.10588235294117654,0.0980392156862746,0.10588235294117654,0.10588235294117654,0.11372549019607847,0.12941176470588234,0.13725490196078427,0.13725490196078427,0.15294117647058814,0.17647058823529416,0.19215686274509802,0.2078431372549019,0.21568627450980382,0.2078431372549019,0.19999999999999996,0.19215686274509802,0.1843137254901961,0.17647058823529416,0.16862745098039222,0.1607843137254903,0.15294117647058814,0.1450980392156862,0.13725490196078427,0.12941176470588234,0.1215686274509804,0.09019607843137245,0.05882352941176472,0.027450980392156765,0.0039215686274509665,-0.019607843137254943,-0.027450980392156876,-0.027450980392156876,-0.027450980392156876,-0.019607843137254943,-0.019607843137254943,-0.019607843137254943,-0.027450980392156876,-0.027450980392156876,-0.04313725490196074,-0.06666666666666665,-0.0980392156862745,-0.1215686274509804,-0.13725490196078427,-0.13725490196078427,-0.13725490196078427,-0.12941176470588234,-0.10588235294117643,-0.09019607843137256,-0.07450980392156858,-0.06666666666666665,-0.06666666666666665,-0.07450980392156858,-0.07450980392156858,-0.09019607843137256,-0.11372549019607847,-0.12941176470588234,-0.13725490196078427,-0.12941176470588234,-0.11372549019607847,-0.0980392156862745,-0.07450980392156858,-0.050980392156862786,-0.027450980392156876,-0.019607843137254943,-0.019607843137254943,-0.0039215686274509665,0.0117647058823529,0.019607843137254832,0.0039215686274509665,-0.019607843137254943,-0.04313725490196074,-0.05882352941176472,-0.06666666666666665,-0.06666666666666665,-0.05882352941176472,-0.03529411764705881,-0.0039215686274509665,0.0117647058823529,0.027450980392156765,0.050980392156862786,0.07450980392156858,0.09019607843137245,0.10588235294117654,0.1215686274509804,0.1215686274509804,0.11372549019607847,0.0980392156862746,0.08235294117647052,0.06666666666666665,0.050980392156862786,0.04313725490196085,0.03529411764705892,0.027450980392156765,0.0117647058823529,0.0117647058823529,0.0039215686274509665,0.0117647058823529,0.027450980392156765,0.04313725490196085,0.050980392156862786,0.050980392156862786,0.050980392156862786,0.05882352941176472,0.05882352941176472,0.050980392156862786,0.03529411764705892,0.019607843137254832,0.0117647058823529,0.0117647058823529,0.019607843137254832,0.019607843137254832,0.0117647058823529,-0.0117647058823529,-0.05882352941176472,-0.09019607843137256,-0.11372549019607847,-0.14509803921568631,-0.16078431372549018,-0.15294117647058825,-0.13725490196078427,-0.1215686274509804,-0.1215686274509804,-0.1215686274509804,-0.10588235294117643,-0.09019607843137256,-0.08235294117647063,-0.07450980392156858,-0.08235294117647063,-0.0980392156862745,-0.10588235294117643,-0.11372549019607847,-0.10588235294117643,-0.0980392156862745,-0.09019607843137256,-0.09019607843137256,-0.08235294117647063,-0.08235294117647063,-0.07450980392156858,-0.06666666666666665,-0.05882352941176472,-0.05882352941176472,-0.05882352941176472,-0.05882352941176472,-0.05882352941176472,-0.06666666666666665,-0.06666666666666665,-0.06666666666666665,-0.06666666666666665,-0.06666666666666665,-0.07450980392156858,-0.07450980392156858,-0.050980392156862786,-0.019607843137254943,0.0117647058823529,0.019607843137254832,0.019607843137254832,0.0039215686274509665,0.0039215686274509665,0.0117647058823529,0.019607843137254832,0.019607843137254832,0.019607843137254832,0.019607843137254832,0.0039215686274509665,-0.0117647058823529,-0.019607843137254943,-0.03529411764705881,-0.04313725490196074,-0.050980392156862786,-0.050980392156862786,-0.05882352941176472,-0.05882352941176472,-0.04313725490196074,-0.03529411764705881,-0.027450980392156876,-0.027450980392156876,-0.0117647058823529,0.0117647058823529,0.027450980392156765,0.04313725490196085,0.04313725490196085,0.04313725490196085,0.04313725490196085,0.04313725490196085,0.03529411764705892,0.027450980392156765,0.0117647058823529,0.0039215686274509665,0.0039215686274509665,0.0039215686274509665,0.0039215686274509665,0.0039215686274509665,-0.0039215686274509665,-0.0117647058823529,-0.019607843137254943,-0.0117647058823529,0.0039215686274509665,0.019607843137254832,0.027450980392156765,0.03529411764705892,0.050980392156862786,0.07450980392156858,0.0980392156862746,0.1215686274509804,0.1450980392156862,0.1450980392156862,0.12941176470588234,0.0980392156862746,0.07450980392156858,0.050980392156862786,0.03529411764705892,0.019607843137254832,0.0117647058823529,0.0117647058823529,0.019607843137254832,0.027450980392156765,0.03529411764705892,0.050980392156862786,0.04313725490196085,0.03529411764705892,0.019607843137254832,0.0117647058823529,0.027450980392156765,0.050980392156862786,0.07450980392156858,0.10588235294117654,0.12941176470588234,0.13725490196078427,0.12941176470588234,0.1215686274509804,0.11372549019607847,0.11372549019607847,0.1215686274509804,0.12941176470588234,0.12941176470588234,0.13725490196078427,0.13725490196078427,0.13725490196078427,0.1450980392156862,0.1450980392156862,0.1450980392156862,0.15294117647058814,0.15294117647058814,0.1450980392156862,0.13725490196078427,0.12941176470588234,0.1215686274509804,0.10588235294117654,0.08235294117647052,0.06666666666666665,0.05882352941176472,0.05882352941176472,0.07450980392156858,0.07450980392156858,0.07450980392156858,0.06666666666666665,0.06666666666666665,0.05882352941176472,0.050980392156862786,0.03529411764705892,0.0117647058823529,0.0039215686274509665,0.0117647058823529,0.03529411764705892,0.06666666666666665,0.09019607843137245,0.10588235294117654,0.12941176470588234,0.13725490196078427,0.1215686274509804,0.0980392156862746,0.07450980392156858,0.050980392156862786,0.03529411764705892,0.0117647058823529,-0.0117647058823529,-0.03529411764705881,-0.04313725490196074,-0.050980392156862786,-0.05882352941176472,-0.05882352941176472,-0.050980392156862786,-0.03529411764705881,-0.019607843137254943,0.0039215686274509665,0.027450980392156765,0.04313725490196085,0.05882352941176472,0.06666666666666665,0.06666666666666665,0.08235294117647052,0.10588235294117654,0.1215686274509804,0.13725490196078427,0.1450980392156862,0.1450980392156862,0.1450980392156862,0.13725490196078427,0.1450980392156862,0.1450980392156862,0.12941176470588234,0.11372549019607847,0.08235294117647052,0.05882352941176472,0.03529411764705892,0.019607843137254832,0.0039215686274509665,-0.0039215686274509665,-0.0039215686274509665,0.0039215686274509665,0.027450980392156765,0.050980392156862786,0.06666666666666665,0.09019607843137245,0.1215686274509804,0.15294117647058814,0.17647058823529416,0.17647058823529416,0.1607843137254903,0.1450980392156862,0.0980392156862746,0.050980392156862786,-0.0039215686274509665,-0.050980392156862786,-0.08235294117647063,-0.0980392156862745,-0.10588235294117643,-0.09019607843137256,-0.06666666666666665,-0.05882352941176472,-0.050980392156862786,-0.03529411764705881,-0.019607843137254943,-0.0039215686274509665,0.0039215686274509665,-0.0039215686274509665,0.0117647058823529,0.019607843137254832,0.019607843137254832,0.0117647058823529,-0.0117647058823529,-0.027450980392156876,-0.050980392156862786,-0.07450980392156858,-0.0980392156862745,-0.1215686274509804,-0.14509803921568631,-0.14509803921568631,-0.13725490196078427,-0.13725490196078427,-0.13725490196078427,-0.12941176470588234,-0.1215686274509804,-0.10588235294117643,-0.0980392156862745,-0.09019607843137256,-0.07450980392156858,-0.05882352941176472,-0.050980392156862786,-0.050980392156862786,-0.050980392156862786,-0.050980392156862786,-0.06666666666666665,-0.07450980392156858,-0.09019607843137256,-0.0980392156862745,-0.10588235294117643,-0.10588235294117643,-0.09019607843137256,-0.07450980392156858,-0.050980392156862786,-0.027450980392156876,-0.0039215686274509665,0.019607843137254832,0.027450980392156765,0.04313725490196085,0.04313725490196085,0.050980392156862786,0.05882352941176472,0.06666666666666665,0.07450980392156858,0.08235294117647052,0.09019607843137245,0.0980392156862746,0.0980392156862746,0.09019607843137245,0.0980392156862746,0.09019607843137245,0.09019607843137245,0.09019607843137245,0.08235294117647052,0.09019607843137245,0.10588235294117654,0.1215686274509804,0.13725490196078427,0.15294117647058814,0.15294117647058814,0.1607843137254903,0.16862745098039222,0.17647058823529416,0.16862745098039222,0.16862745098039222,0.1607843137254903,0.13725490196078427,0.0980392156862746,0.05882352941176472,0.019607843137254832,0.0117647058823529,0.027450980392156765,0.03529411764705892,0.04313725490196085,0.04313725490196085,0.05882352941176472,0.09019607843137245,0.1215686274509804,0.1215686274509804,0.1215686274509804,0.1215686274509804,0.11372549019607847,0.10588235294117654,0.0980392156862746,0.08235294117647052,0.06666666666666665,0.04313725490196085,0.019607843137254832,-0.0117647058823529,-0.027450980392156876,-0.027450980392156876,-0.019607843137254943,-0.0039215686274509665,0.019607843137254832,0.03529411764705892,0.04313725490196085,0.050980392156862786,0.05882352941176472,0.06666666666666665,0.05882352941176472,0.050980392156862786,0.04313725490196085,0.050980392156862786,0.05882352941176472,0.05882352941176472,0.05882352941176472,0.05882352941176472,0.05882352941176472,0.04313725490196085,0.04313725490196085,0.04313725490196085,0.05882352941176472,0.09019607843137245,0.12941176470588234,0.15294117647058814,0.17647058823529416,0.1843137254901961,0.1843137254901961,0.17647058823529416,0.15294117647058814,0.13725490196078427,0.11372549019607847,0.09019607843137245,0.07450980392156858,0.08235294117647052,0.09019607843137245,0.0980392156862746,0.10588235294117654,0.1215686274509804,0.13725490196078427,0.1607843137254903,0.17647058823529416,0.17647058823529416,0.1843137254901961,0.17647058823529416,0.16862745098039222,0.1450980392156862,0.12941176470588234,0.10588235294117654,0.08235294117647052,0.08235294117647052,0.09019607843137245,0.09019607843137245,0.0980392156862746,0.09019607843137245,0.09019607843137245,0.08235294117647052,0.08235294117647052,0.07450980392156858,0.08235294117647052,0.09019607843137245,0.09019607843137245,0.09019607843137245,0.08235294117647052,0.07450980392156858,0.06666666666666665,0.03529411764705892,0.0039215686274509665,-0.027450980392156876,-0.050980392156862786,-0.07450980392156858,-0.08235294117647063,-0.10588235294117643,-0.12941176470588234,-0.15294117647058825,-0.16078431372549018,-0.1686274509803921,-0.1686274509803921,-0.1686274509803921,-0.1686274509803921,-0.16078431372549018,-0.16078431372549018,-0.17647058823529416,-0.19215686274509802,-0.19215686274509802,-0.19215686274509802,-0.1843137254901961,-0.1686274509803921,-0.14509803921568631,-0.12941176470588234,-0.10588235294117643,-0.09019607843137256,-0.08235294117647063,-0.07450980392156858,-0.07450980392156858,-0.0980392156862745,-0.1215686274509804,-0.15294117647058825,-0.1686274509803921,-0.1843137254901961,-0.19215686274509802,-0.19999999999999996,-0.207843137254902,-0.19999999999999996,-0.19215686274509802,-0.1686274509803921,-0.14509803921568631,-0.11372549019607847,-0.07450980392156858,-0.050980392156862786,-0.03529411764705881,-0.027450980392156876,-0.019607843137254943,-0.019607843137254943,-0.019607843137254943,-0.04313725490196074,-0.07450980392156858,-0.09019607843137256,-0.10588235294117643,-0.11372549019607847,-0.1215686274509804,-0.11372549019607847,-0.0980392156862745,-0.08235294117647063,-0.05882352941176472,-0.027450980392156876,0.0039215686274509665,0.019607843137254832,0.019607843137254832,0.0117647058823529,0.019607843137254832,0.027450980392156765,0.0117647058823529,-0.0039215686274509665,-0.027450980392156876,-0.027450980392156876,-0.027450980392156876,-0.019607843137254943,-0.0039215686274509665,0.0117647058823529,0.027450980392156765,0.027450980392156765,0.019607843137254832,0.0117647058823529,0.0117647058823529,-0.0039215686274509665,-0.019607843137254943,-0.03529411764705881,-0.05882352941176472,-0.06666666666666665,-0.08235294117647063,-0.09019607843137256,-0.0980392156862745,-0.09019607843137256,-0.09019607843137256,-0.09019607843137256,-0.08235294117647063,-0.08235294117647063,-0.07450980392156858,-0.06666666666666665,-0.05882352941176472,-0.04313725490196074,-0.019607843137254943,-0.0039215686274509665,0.0117647058823529,0.019607843137254832,0.019607843137254832,0.0117647058823529,0.0039215686274509665,-0.0039215686274509665,-0.0117647058823529,-0.0039215686274509665,0.0039215686274509665,0.0039215686274509665,0.0039215686274509665,0.0117647058823529,0.027450980392156765,0.050980392156862786,0.09019607843137245,0.11372549019607847,0.13725490196078427,0.1607843137254903,0.1843137254901961,0.2078431372549019,0.21568627450980382,0.2313725490196079,0.23921568627450984,0.23921568627450984,0.2313725490196079,0.21568627450980382,0.1843137254901961,0.15294117647058814,0.13725490196078427,0.1215686274509804,0.10588235294117654,0.11372549019607847,0.11372549019607847,0.11372549019607847,0.13725490196078427,0.16862745098039222,0.19999999999999996,0.21568627450980382,0.21568627450980382,0.21568627450980382,0.21568627450980382,0.2078431372549019,0.1843137254901961,0.1607843137254903,0.12941176470588234,0.09019607843137245,0.050980392156862786,0.0039215686274509665,-0.03529411764705881,-0.04313725490196074,-0.050980392156862786,-0.04313725490196074,-0.03529411764705881,-0.027450980392156876,-0.019607843137254943,-0.0117647058823529,-0.0039215686274509665,0.0039215686274509665,-0.0039215686274509665,-0.027450980392156876,-0.06666666666666665,-0.10588235294117643,-0.13725490196078427,-0.16078431372549018,-0.1843137254901961,-0.19999999999999996,-0.207843137254902,-0.22352941176470587,-0.22352941176470587,-0.207843137254902,-0.19215686274509802,-0.17647058823529416,-0.16078431372549018,-0.13725490196078427,-0.11372549019607847,-0.09019607843137256,-0.08235294117647063,-0.06666666666666665,-0.05882352941176472,-0.06666666666666665,-0.07450980392156858,-0.08235294117647063,-0.08235294117647063,-0.07450980392156858,-0.06666666666666665,-0.05882352941176472,-0.050980392156862786,-0.03529411764705881,-0.03529411764705881,-0.027450980392156876,-0.027450980392156876,-0.027450980392156876,-0.027450980392156876,-0.019607843137254943,-0.0117647058823529,0.0039215686274509665,0.0117647058823529,0.019607843137254832,0.027450980392156765,0.027450980392156765,0.03529411764705892,0.050980392156862786,0.07450980392156858,0.0980392156862746,0.10588235294117654,0.10588235294117654,0.0980392156862746,0.08235294117647052,0.06666666666666665,0.06666666666666665,0.06666666666666665,0.07450980392156858]