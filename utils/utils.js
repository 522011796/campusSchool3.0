import { Message } from 'element-ui'
import crypto from 'crypto';

export function getmd5(str) {
  var a;
  var md5 = crypto.createHash("md5");
  //update("中文", "utf8")
  md5.update(str);
  var a = md5.digest('hex');
  ////console.log(a);
  //47bce5c74f589f4867dbd57e9ca9f808
  return a;
}

export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function setChildren(tree, obj, param, param2){//迭代方法
  let _self = this;
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      obj.push(item);

      if(item[param] != undefined && item[param].length > 0){
        obj[index][param2] = [];
        setChildren(item[param], obj[index][param2], param, param2);
      }
    });
    return obj;
  }
}

export function setDeptChildren(tree, obj, param, param2, type){//迭代方法--部门
  let _self = this;
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      item['label'] = item.department_name;
      if (type == 'id'){
        item['value'] = item.id;
      }else {
        item['value'] = item.department_path;
      }
      obj.push(item);

      if(item[param] != undefined && item[param].length > 0){
        obj[index][param2] = [];
        setDeptChildren(item[param], obj[index][param2], param, param2, type);
      }
    });
    return obj;
  }
}

export function setFormServerChildren(tree) {//迭代方法--表单服务列表
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0) {
    for (let i = 0; i < tree.length; i++) {
      arr.push({
        label: tree[i].appletName,
        value: tree[i].id,
        id: tree[i].id,
        unit: 1
      });
      if (tree[i].formList && tree[i].formList.length > 0){
        let childList = tree[i].formList;
        arr[i]['children'] = [];
        for (let j = 0; j < childList.length; j++) {
          arr[i]['children'].push({
            label: childList[j].formName,
            value: childList[j].id,
            id: childList[j].id,
            unit: 2
          });
        }
      }
    }
  }
  return arr;
}

export function setSchoolBuildChildren(tree, type){//迭代方法--教学楼
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3){
        arr.push({
          label: tree[i].building_name,
          value: tree[i].id,
          id: tree[i].id,
          unit: tree[i].unit,
        });
      }

      if (type == 2 || type == 3){
        if (tree[i].child_list && tree[i].child_list.length > 0){
          let childList = tree[i].child_list;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              label: childList[j].floor_num + "楼",
              value: childList[j].floor_num,
              id: childList[j].id,
              buildId: childList[j].build_id,
              floorNum: childList[j].floor_num,
              unit: childList[j].unit,
            });

            if (type == 3){
              if (childList[j].child_list && childList[j].child_list.length > 0){
                let childRoomList = childList[j].child_list;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    label: childRoomList[z].classroom_no,
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    buildId: childRoomList[z].build_id,
                    floorNum: childRoomList[z].floor_num,
                    unit: childRoomList[z].unit,
                  });
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }
}

export function setDormBuildChildren(tree, type){//迭代方法--宿舍楼
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3){
        arr.push({
          label: tree[i].building_name,
          value: tree[i].id,
          id: tree[i].id,
          unit: tree[i].unit,
        });
      }

      if (type == 2 || type == 3){
        if (tree[i].child_list && tree[i].child_list.length > 0){
          let childList = tree[i].child_list;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              label: childList[j].floor_num + "楼",
              value: childList[j].floor_num,
              id: childList[j].floor_num,
              buildId: childList[j].build_id,
              floorNum: childList[j].floor_num,
              unit: childList[j].unit,
            });

            if (type == 3){
              if (childList[j].child_list && childList[j].child_list.length > 0){
                let childRoomList = childList[j].child_list;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    label: childRoomList[z].dormitory_no,
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    buildId: childRoomList[z].build_id,
                    floorNum: childRoomList[z].floor_num,
                    unit: childRoomList[z].unit,
                  });
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }
}

export function setCollegeChildren(tree, type){//迭代方法-学院
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3 || type == 4){
        arr.push({
          value: tree[i].id,
          id: tree[i].id,
          label: tree[i].name,
          unit: tree[i].unit
        });
      }

      if (type == 2 || type == 3 || type == 4){
        if (tree[i].children && tree[i].children.length > 0){
          let childList = tree[i].children;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              value: childList[j].id,
              id: childList[j].id,
              label: childList[j].name,
              college_id: childList[j].college_id,
              major_no: childList[j].major_no,
              pId: childList[j].pId,
              unit: childList[j].unit,
            });

            if (type == 3 || type ==4){
              if (childList[j].children && childList[j].children.length > 0){
                let childRoomList = childList[j].children;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    label: childRoomList[z].name,
                    grade: childRoomList[z].grade,
                    pId: childRoomList[z].sch_id,
                    start_time: childRoomList[z].start_time,
                    end_time: childRoomList[z].end_time,
                    major_id: childRoomList[z].major_id,
                    unit: childRoomList[z].unit
                  });

                  if (type == 4){
                    if (childRoomList[z].children && childRoomList[z].children.length > 0) {
                      let childClassList = childRoomList[z].children;
                      arr[i]['children'][j]['children'][z]['children'] = [];
                      for (let ll = 0; ll < childClassList.length; ll++) {
                        arr[i]['children'][j]['children'][z]['children'].push({
                          value: childClassList[ll].id,
                          id: childClassList[ll].id,
                          label: childClassList[ll].name,
                          master_teacher: childClassList[ll].master_teacher,
                          pId: childClassList[ll].pId,
                          class_no: childClassList[ll].class_no,
                          major_id: childClassList[ll].major_id,
                          college_id: childClassList[ll].college_id,
                          classroom_id: childClassList[ll].classroom_id,
                          building_id: childClassList[ll].building_id,
                          create_time: childClassList[ll].create_time,
                          unit: childClassList[ll].unit
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }

  /*let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      obj.push({
        value: item.id,
        id: item.id,
        label: item.name,
      });

      if (item.unit == 1){
        obj[index]['student_manage_id'] = item.student_manage_id;
        obj[index]['pId'] = item.pId;
        obj[index]['director_id'] = item.director_id;
        obj[index]['college_no'] = item.college_no;
        obj[index]['pId'] = item.pId;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 2){
        obj[index]['college_id'] = item.college_id;
        obj[index]['major_no'] = item.major_no;
        obj[index]['pId'] = item.pId;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 3){
        obj[index]['grade'] = item.grade;
        obj[index]['pId'] = item.sch_id;
        obj[index]['start_time'] = item.start_time;
        obj[index]['end_time'] = item.end_time;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 4){
        obj[index]['master_teacher'] = item.master_teacher;
        obj[index]['pId'] = item.sch_id;
        obj[index]['class_no'] = item.class_no;
        obj[index]['major_id'] = item.major_id;
        obj[index]['college_id'] = item.college_id;
        obj[index]['classroom_id'] = item.classroom_id;
        obj[index]['building_id'] = item.building_id;
        obj[index]['unit'] = item.unit;
      }

      if (type == 2 || type == 3 || type == 4){
        if(item[param] != undefined && item[param].length > 0){
          obj[index][param] = [];
          setCollegeChildren(item.children,obj[index][param],param, type);
        }
      }
    });
    return obj;
  }*/
}

export function MessageError(text = '失败',) {
  Message({
    message: text,
    type: 'error',
    duration: 3 * 1000
  })
}
export function MessageInfo(text = '消息') {
  Message({
    message: text,
    type: 'info',
    duration: 3 * 1000
  })
}
export function MessageSuccess(text = '成功') {
  Message({
    message: text,
    type: 'success',
    duration: 3 * 1000
  })
}

export function MessageWarning(text = '警告') {
  Message({
    message: text,
    type: 'warning',
    duration: 3 * 1000
  })
}

export function getLength (str) {
  var realLength = 0, len = str.length, charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128)
      realLength += 1;
    else
      realLength += 2;
  }
  return realLength;
}

export function clearData (data, isSerialize) {
  if (data) {
    if (isSerialize) {
      var newData = {};
      for (var i = 0, length = data.length; i < length; i++) {
        if (trim(data[i].value) != '' && trim(data[i].value) != 'null') {
          newData[data[i].name] = $.trim(data[i].value);
        }
      }
      return newData;
    } else {
      for (var key in data) {
        if (data[key] === '' || data[key] == 'null' || data[key] == null) {
          delete data[key];
        }
      };
      return data;
    }
  }
}

export function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function deviceType(type, str){
  let deviceType = {
    "1": "终端机",
    "2": "摄像头",
    "3": "一体机本地版",
    "4": "一体机云端版",
    "6": "门禁控制器",
  };
  if (str && type == 'set') {
    return deviceType[str];
  }
  if (!str && type == 'get'){
    return deviceType;
  }
}

export function workEnjoy(type, str){
  let workEnjoy = {
    "01": "退休",
    "02": "离休",
    "03": "死亡",
    "04": "返聘",
    "05": "调出",
    "06": "辞职",
    "07": "离职",
    "08": "开除",
    "09": "下落不明",
    "11": "在职",
    "12": "延聘",
    "13": "待退休"
  };
  if (str && type == 'set') {
    return workEnjoy[str];
  }
  if (!str && type == 'get'){
    return workEnjoy;
  }
}

export function workTitle(type, str) {
  let workTitle = {
    "01": "一级",
    "02": "二级",
    "03": "三级",
    "04": "四级",
    "05": "五级",
    "06": "六级",
    "07": "七级",
    "08": "八级",
    "09": "九级",
    "10": "十级"
  };
  if (str && type == 'set') {
    return workTitle[str];
  }
  if (!str && type == 'get'){
    return workTitle;
  }
}

export function studentTeachStatus(type, str) {
  let studentTeachStatus = {
    "11":"死亡",
    "99":"其他",
    "01":"在读",
    "12":"保留入学资格",
    "02":"休学",
    "13":"公派出国",
    "03":"退学",
    "14":"开除",
    "04":"停学",
    "15":"下落不明",
    "05":"复学",
    "06":"流失",
    "07":"毕业",
    "08":"结业",
    "09":"肆业",
    "10":"转学"
  };
  if (str && type == 'set') {
    return studentTeachStatus[str];
  }
  if (!str && type == 'get'){
    return studentTeachStatus;
  }
}

export function teachMethod(type, str){
  let teachMethod = {
    "1": "面授讲课",
    "2": "辅导",
    "3": "录像讲课",
    "4": "网络教学",
    "5": "实验",
    "6": "实习"
  };
  if (str && type == 'set') {
    return teachMethod[str];
  }
  if (!str && type == 'get'){
    return teachMethod;
  }
}

export function doorExceptionStatus(type, str){
  let teachMethod = {
    "0": "异常",
    "1": "受限",
    "2": "已解除"
  };
  if (str != null && type == 'set') {
    return doorExceptionStatus[str];
  }
  if (!str && type == 'get'){
    return doorExceptionStatus;
  }
}

export function examMethod(type, str){
  let examMethod = {
    "1": "考试",
    "2": "考查"
  };
  if (str && type == 'set') {
    return examMethod[str];
  }
  if (!str && type == 'get'){
    return examMethod;
  }
}

export function courseProperties(type, str){
  let courseProperties = {
    "1": "必修",
    "2": "限选",
    "3": "任选",
    "4": "辅修",
    "5": "实践",
    "6": "双必",
    "7": "双选",
    "8": "通选",
    "9": "其他"
  };
  if (str && type == 'set') {
    return courseProperties[str];
  }
  if (!str && type == 'get'){
    return courseProperties;
  }
}

export function nationInfo(str){
  let nationInfo = [{"name":"汉族","char_code":"HA","checked":true,"code":"01"},{"name":"蒙古族","char_code":"MG","checked":false,"code":"02"},{"name":"回族","char_code":"HU","checked":false,"code":"03"},{"name":"藏族","char_code":"ZA","checked":false,"code":"04"},{"name":"维吾尔族","char_code":"UG","checked":false,"code":"05"},{"name":"苗族","char_code":"MH","checked":false,"code":"06"},{"name":"彝族","char_code":"YI","checked":false,"code":"07"},{"name":"壮族","char_code":"ZH","checked":false,"code":"08"},{"name":"布依族","char_code":"BY","checked":false,"code":"09"},{"name":"朝鲜族","char_code":"CS","checked":false,"code":"10"},{"name":"满族","char_code":"MA","checked":false,"code":"11"},{"name":"侗族","char_code":"DO","checked":false,"code":"12"},{"name":"瑶族","char_code":"YA","checked":false,"code":"13"},{"name":"白族","char_code":"BA","checked":false,"code":"14"},{"name":"土家族","char_code":"TJ","checked":false,"code":"15"},{"name":"哈尼族","char_code":"HN","checked":false,"code":"16"},{"name":"哈萨克族","char_code":"KZ","checked":false,"code":"17"},{"name":"傣族","char_code":"DA","checked":false,"code":"18"},{"name":"黎族","char_code":"LI","checked":false,"code":"19"},{"name":"傈傈族","char_code":"LS","checked":false,"code":"20"},{"name":"佤族","char_code":"VA","checked":false,"code":"21"},{"name":"畲族","char_code":"SH","checked":false,"code":"22"},{"name":"高山族","char_code":"GS","checked":false,"code":"23"},{"name":"拉祜族","char_code":"LG","checked":false,"code":"24"},{"name":"水族","char_code":"SU","checked":false,"code":"25"},{"name":"东乡族","char_code":"DX","checked":false,"code":"26"},{"name":"纳西族","char_code":"NX","checked":false,"code":"27"},{"name":"景颇族","char_code":"JP","checked":false,"code":"28"},{"name":"柯尔克孜族","char_code":"KG","checked":false,"code":"29"},{"name":"土族","char_code":"TU","checked":false,"code":"30"},{"name":"达翰尔族","char_code":"DU","checked":false,"code":"31"},{"name":"仫佬族","char_code":"ML","checked":false,"code":"32"},{"name":"羌族","char_code":"QI","checked":false,"code":"33"},{"name":"布朗族","char_code":"BL","checked":false,"code":"34"},{"name":"撒拉族","char_code":"SL","checked":false,"code":"35"},{"name":"毛南族","char_code":"MN","checked":false,"code":"36"},{"name":"仡佬族","char_code":"GL","checked":false,"code":"37"},{"name":"锡伯族","char_code":"XB","checked":false,"code":"38"},{"name":"阿昌族","char_code":"AC","checked":false,"code":"39"},{"name":"普米族","char_code":"PM","checked":false,"code":"40"},{"name":"塔吉克族","char_code":"TA","checked":false,"code":"41"},{"name":"怒族","char_code":"NU","checked":false,"code":"42"},{"name":"乌孜别克族","char_code":"UZ","checked":false,"code":"43"},{"name":"俄罗斯族","char_code":"RS","checked":false,"code":"44"},{"name":"鄂温克族","char_code":"EW","checked":false,"code":"45"},{"name":"德昂族","char_code":"DE","checked":false,"code":"46"},{"name":"保安族","char_code":"BN","checked":false,"code":"47"},{"name":"裕固族","char_code":"YG","checked":false,"code":"48"},{"name":"京族","char_code":"GI","checked":false,"code":"49"},{"name":"塔塔尔族","char_code":"TT","checked":false,"code":"50"},{"name":"独龙族","char_code":"DR","checked":false,"code":"51"},{"name":"鄂伦春族","char_code":"OR","checked":false,"code":"52"},{"name":"赫哲族","char_code":"HZ","checked":false,"code":"53"},{"name":"门巴族","char_code":"MB","checked":false,"code":"54"},{"name":"珞巴族","char_code":"LB","checked":false,"code":"55"},{"name":"基诺族","char_code":"JN","checked":false,"code":"56"},{"name":"穿青人族","char_code":"CQ","checked":false,"code":"81"},{"name":"其他","char_code":"QT","checked":false,"code":"97"},{"name":"外国血统中国籍人士","char_code":"WG","checked":false,"code":"98"}];
  return nationInfo;
}

export function nationalityInfo(str){
  let nationalityInfo = [{"country_id":100006,"country_code":244,"country_name_en":"Angola","country_name_cn":"安哥拉","ab":"AO"},{"country_id":100007,"country_code":93,"country_name_en":"Afghanistan","country_name_cn":"阿富汗","ab":"AF"},{"country_id":100008,"country_code":355,"country_name_en":"Albania","country_name_cn":"阿尔巴尼亚","ab":"AL"},{"country_id":100009,"country_code":213,"country_name_en":"Algeria","country_name_cn":"阿尔及利亚","ab":"DZ"},{"country_id":100010,"country_code":376,"country_name_en":"Andorra","country_name_cn":"安道尔共和国","ab":"AD"},{"country_id":100011,"country_code":1264,"country_name_en":"Anguilla","country_name_cn":"安圭拉岛","ab":"AI"},{"country_id":100012,"country_code":1268,"country_name_en":"Antigua and Barbuda","country_name_cn":"安提瓜和巴布达","ab":"AG"},{"country_id":100013,"country_code":54,"country_name_en":"Argentina","country_name_cn":"阿根廷","ab":"AR"},{"country_id":100014,"country_code":374,"country_name_en":"Armenia","country_name_cn":"亚美尼亚","ab":"AM"},{"country_id":100015,"country_code":247,"country_name_en":"Ascension","country_name_cn":"阿森松","ab":""},{"country_id":100016,"country_code":61,"country_name_en":"Australia","country_name_cn":"澳大利亚","ab":"AU"},{"country_id":100017,"country_code":43,"country_name_en":"Austria","country_name_cn":"奥地利","ab":"AT"},{"country_id":100018,"country_code":994,"country_name_en":"Azerbaijan","country_name_cn":"阿塞拜疆","ab":"AZ"},{"country_id":100019,"country_code":1242,"country_name_en":"Bahamas","country_name_cn":"巴哈马","ab":"BS"},{"country_id":100020,"country_code":973,"country_name_en":"Bahrain","country_name_cn":"巴林","ab":"BH"},{"country_id":100021,"country_code":880,"country_name_en":"Bangladesh","country_name_cn":"孟加拉国","ab":"BD"},{"country_id":100022,"country_code":1246,"country_name_en":"Barbados","country_name_cn":"巴巴多斯","ab":"BB"},{"country_id":100023,"country_code":375,"country_name_en":"Belarus","country_name_cn":"白俄罗斯","ab":"BY"},{"country_id":100024,"country_code":32,"country_name_en":"Belgium","country_name_cn":"比利时","ab":"BE"},{"country_id":100025,"country_code":501,"country_name_en":"Belize","country_name_cn":"伯利兹","ab":"BZ"},{"country_id":100026,"country_code":229,"country_name_en":"Benin","country_name_cn":"贝宁","ab":"BJ"},{"country_id":100027,"country_code":1441,"country_name_en":"Bermuda Is.","country_name_cn":"百慕大群岛","ab":"BM"},{"country_id":100028,"country_code":591,"country_name_en":"Bolivia","country_name_cn":"玻利维亚","ab":"BO"},{"country_id":100029,"country_code":267,"country_name_en":"Botswana","country_name_cn":"博茨瓦纳","ab":"BW"},{"country_id":100030,"country_code":55,"country_name_en":"Brazil","country_name_cn":"巴西","ab":"BR"},{"country_id":100031,"country_code":673,"country_name_en":"Brunei","country_name_cn":"文莱","ab":"BN"},{"country_id":100032,"country_code":359,"country_name_en":"Bulgaria","country_name_cn":"保加利亚","ab":"BG"},{"country_id":100033,"country_code":226,"country_name_en":"Burkina-faso","country_name_cn":"布基纳法索","ab":"BF"},{"country_id":100034,"country_code":95,"country_name_en":"Burma","country_name_cn":"缅甸","ab":"MM"},{"country_id":100035,"country_code":257,"country_name_en":"Burundi","country_name_cn":"布隆迪","ab":"BI"},{"country_id":100036,"country_code":237,"country_name_en":"Cameroon","country_name_cn":"喀麦隆","ab":"CM"},{"country_id":100037,"country_code":1,"country_name_en":"Canada","country_name_cn":"加拿大","ab":"CA"},{"country_id":100038,"country_code":1345,"country_name_en":"Cayman Is.","country_name_cn":"开曼群岛","ab":""},{"country_id":100039,"country_code":236,"country_name_en":"Central African Republic","country_name_cn":"中非共和国","ab":"CF"},{"country_id":100040,"country_code":235,"country_name_en":"Chad","country_name_cn":"乍得","ab":"TD"},{"country_id":100041,"country_code":56,"country_name_en":"Chile","country_name_cn":"智利","ab":"CL"},{"country_id":100042,"country_code":86,"country_name_en":"China","country_name_cn":"中国","ab":"CN"},{"country_id":100043,"country_code":57,"country_name_en":"Colombia","country_name_cn":"哥伦比亚","ab":"CO"},{"country_id":100044,"country_code":242,"country_name_en":"Congo","country_name_cn":"刚果","ab":"CG"},{"country_id":100045,"country_code":682,"country_name_en":"Cook Is.","country_name_cn":"库克群岛","ab":"CK"},{"country_id":100046,"country_code":506,"country_name_en":"Costa Rica","country_name_cn":"哥斯达黎加","ab":"CR"},{"country_id":100047,"country_code":53,"country_name_en":"Cuba","country_name_cn":"古巴","ab":"CU"},{"country_id":100048,"country_code":357,"country_name_en":"Cyprus","country_name_cn":"塞浦路斯","ab":"CY"},{"country_id":100049,"country_code":420,"country_name_en":"Czech Republic","country_name_cn":"捷克","ab":"CZ"},{"country_id":100050,"country_code":45,"country_name_en":"Denmark","country_name_cn":"丹麦","ab":"DK"},{"country_id":100051,"country_code":253,"country_name_en":"Djibouti","country_name_cn":"吉布提","ab":"DJ"},{"country_id":100052,"country_code":1890,"country_name_en":"Dominica Rep.","country_name_cn":"多米尼加共和国","ab":"DO"},{"country_id":100053,"country_code":593,"country_name_en":"Ecuador","country_name_cn":"厄瓜多尔","ab":"EC"},{"country_id":100054,"country_code":20,"country_name_en":"Egypt","country_name_cn":"埃及","ab":"EG"},{"country_id":100055,"country_code":503,"country_name_en":"EI Salvador","country_name_cn":"萨尔瓦多","ab":"SV"},{"country_id":100056,"country_code":372,"country_name_en":"Estonia","country_name_cn":"爱沙尼亚","ab":"EE"},{"country_id":100057,"country_code":251,"country_name_en":"Ethiopia","country_name_cn":"埃塞俄比亚","ab":"ET"},{"country_id":100058,"country_code":679,"country_name_en":"Fiji","country_name_cn":"斐济","ab":"FJ"},{"country_id":100059,"country_code":358,"country_name_en":"Finland","country_name_cn":"芬兰","ab":"FI"},{"country_id":100060,"country_code":33,"country_name_en":"France","country_name_cn":"法国","ab":"FR"},{"country_id":100061,"country_code":594,"country_name_en":"French Guiana","country_name_cn":"法属圭亚那","ab":"GF"},{"country_id":100062,"country_code":241,"country_name_en":"Gabon","country_name_cn":"加蓬","ab":"GA"},{"country_id":100063,"country_code":220,"country_name_en":"Gambia","country_name_cn":"冈比亚","ab":"GM"},{"country_id":100064,"country_code":995,"country_name_en":"Georgia","country_name_cn":"格鲁吉亚","ab":"GE"},{"country_id":100065,"country_code":49,"country_name_en":"Germany","country_name_cn":"德国","ab":"DE"},{"country_id":100066,"country_code":233,"country_name_en":"Ghana","country_name_cn":"加纳","ab":"GH"},{"country_id":100067,"country_code":350,"country_name_en":"Gibraltar","country_name_cn":"直布罗陀","ab":"GI"},{"country_id":100068,"country_code":30,"country_name_en":"Greece","country_name_cn":"希腊","ab":"GR"},{"country_id":100069,"country_code":1809,"country_name_en":"Grenada","country_name_cn":"格林纳达","ab":"GD"},{"country_id":100070,"country_code":1671,"country_name_en":"Guam","country_name_cn":"关岛","ab":"GU"},{"country_id":100071,"country_code":502,"country_name_en":"Guatemala","country_name_cn":"危地马拉","ab":"GT"},{"country_id":100072,"country_code":224,"country_name_en":"Guinea","country_name_cn":"几内亚","ab":"GN"},{"country_id":100073,"country_code":592,"country_name_en":"Guyana","country_name_cn":"圭亚那","ab":"GY"},{"country_id":100074,"country_code":509,"country_name_en":"Haiti","country_name_cn":"海地","ab":"HT"},{"country_id":100075,"country_code":504,"country_name_en":"Honduras","country_name_cn":"洪都拉斯","ab":"HN"},{"country_id":100076,"country_code":852,"country_name_en":"Hongkong","country_name_cn":"香港","ab":"HK"},{"country_id":100077,"country_code":36,"country_name_en":"Hungary","country_name_cn":"匈牙利","ab":"HU"},{"country_id":100078,"country_code":354,"country_name_en":"Iceland","country_name_cn":"冰岛","ab":"IS"},{"country_id":100079,"country_code":91,"country_name_en":"India","country_name_cn":"印度","ab":"IN"},{"country_id":100080,"country_code":62,"country_name_en":"Indonesia","country_name_cn":"印度尼西亚","ab":"ID"},{"country_id":100081,"country_code":98,"country_name_en":"Iran","country_name_cn":"伊朗","ab":"IR"},{"country_id":100082,"country_code":964,"country_name_en":"Iraq","country_name_cn":"伊拉克","ab":"IQ"},{"country_id":100083,"country_code":353,"country_name_en":"Ireland","country_name_cn":"爱尔兰","ab":"IE"},{"country_id":100084,"country_code":972,"country_name_en":"Israel","country_name_cn":"以色列","ab":"IL"},{"country_id":100085,"country_code":39,"country_name_en":"Italy","country_name_cn":"意大利","ab":"IT"},{"country_id":100086,"country_code":225,"country_name_en":"Ivory Coast","country_name_cn":"科特迪瓦","ab":""},{"country_id":100087,"country_code":1876,"country_name_en":"Jamaica","country_name_cn":"牙买加","ab":"JM"},{"country_id":100088,"country_code":81,"country_name_en":"Japan","country_name_cn":"日本","ab":"JP"},{"country_id":100089,"country_code":962,"country_name_en":"Jordan","country_name_cn":"约旦","ab":"JO"},{"country_id":100090,"country_code":855,"country_name_en":"Kampuchea (Cambodia )","country_name_cn":"柬埔寨","ab":"KH"},{"country_id":100091,"country_code":327,"country_name_en":"Kazakstan","country_name_cn":"哈萨克斯坦","ab":"KZ"},{"country_id":100092,"country_code":254,"country_name_en":"Kenya","country_name_cn":"肯尼亚","ab":"KE"},{"country_id":100093,"country_code":82,"country_name_en":"Korea","country_name_cn":"韩国","ab":"KR"},{"country_id":100094,"country_code":965,"country_name_en":"Kuwait","country_name_cn":"科威特","ab":"KW"},{"country_id":100095,"country_code":331,"country_name_en":"Kyrgyzstan","country_name_cn":"吉尔吉斯坦","ab":"KG"},{"country_id":100096,"country_code":856,"country_name_en":"Laos","country_name_cn":"老挝","ab":"LA"},{"country_id":100097,"country_code":371,"country_name_en":"Latvia","country_name_cn":"拉脱维亚","ab":"LV"},{"country_id":100098,"country_code":961,"country_name_en":"Lebanon","country_name_cn":"黎巴嫩","ab":"LB"},{"country_id":100099,"country_code":266,"country_name_en":"Lesotho","country_name_cn":"莱索托","ab":"LS"},{"country_id":100100,"country_code":231,"country_name_en":"Liberia","country_name_cn":"利比里亚","ab":"LR"},{"country_id":100101,"country_code":218,"country_name_en":"Libya","country_name_cn":"利比亚","ab":"LY"},{"country_id":100102,"country_code":423,"country_name_en":"Liechtenstein","country_name_cn":"列支敦士登","ab":"LI"},{"country_id":100103,"country_code":370,"country_name_en":"Lithuania","country_name_cn":"立陶宛","ab":"LT"},{"country_id":100104,"country_code":352,"country_name_en":"Luxembourg","country_name_cn":"卢森堡","ab":"LU"},{"country_id":100105,"country_code":853,"country_name_en":"Macao","country_name_cn":"澳门","ab":"MO"},{"country_id":100106,"country_code":261,"country_name_en":"Madagascar","country_name_cn":"马达加斯加","ab":"MG"},{"country_id":100107,"country_code":265,"country_name_en":"Malawi","country_name_cn":"马拉维","ab":"MW"},{"country_id":100108,"country_code":60,"country_name_en":"Malaysia","country_name_cn":"马来西亚","ab":"MY"},{"country_id":100109,"country_code":960,"country_name_en":"Maldives","country_name_cn":"马尔代夫","ab":"MV"},{"country_id":100110,"country_code":223,"country_name_en":"Mali","country_name_cn":"马里","ab":"ML"},{"country_id":100111,"country_code":356,"country_name_en":"Malta","country_name_cn":"马耳他","ab":"MT"},{"country_id":100112,"country_code":1670,"country_name_en":"Mariana Is","country_name_cn":"马里亚那群岛","ab":""},{"country_id":100113,"country_code":596,"country_name_en":"Martinique","country_name_cn":"马提尼克","ab":""},{"country_id":100114,"country_code":230,"country_name_en":"Mauritius","country_name_cn":"毛里求斯","ab":"MU"},{"country_id":100115,"country_code":52,"country_name_en":"Mexico","country_name_cn":"墨西哥","ab":"MX"},{"country_id":100116,"country_code":373,"country_name_en":"Moldova, Republic of","country_name_cn":"摩尔多瓦","ab":"MD"},{"country_id":100117,"country_code":377,"country_name_en":"Monaco","country_name_cn":"摩纳哥","ab":"MC"},{"country_id":100118,"country_code":976,"country_name_en":"Mongolia","country_name_cn":"蒙古","ab":"MN"},{"country_id":100119,"country_code":1664,"country_name_en":"Montserrat Is","country_name_cn":"蒙特塞拉特岛","ab":"MS"},{"country_id":100120,"country_code":212,"country_name_en":"Morocco","country_name_cn":"摩洛哥","ab":"MA"},{"country_id":100121,"country_code":258,"country_name_en":"Mozambique","country_name_cn":"莫桑比克","ab":"MZ"},{"country_id":100122,"country_code":264,"country_name_en":"Namibia","country_name_cn":"纳米比亚","ab":"NA"},{"country_id":100123,"country_code":674,"country_name_en":"Nauru","country_name_cn":"瑙鲁","ab":"NR"},{"country_id":100124,"country_code":977,"country_name_en":"Nepal","country_name_cn":"尼泊尔","ab":"NP"},{"country_id":100125,"country_code":599,"country_name_en":"Netheriands Antilles","country_name_cn":"荷属安的列斯","ab":""},{"country_id":100126,"country_code":31,"country_name_en":"Netherlands","country_name_cn":"荷兰","ab":"NL"},{"country_id":100127,"country_code":64,"country_name_en":"New Zealand","country_name_cn":"新西兰","ab":"NZ"},{"country_id":100128,"country_code":505,"country_name_en":"Nicaragua","country_name_cn":"尼加拉瓜","ab":"NI"},{"country_id":100129,"country_code":227,"country_name_en":"Niger","country_name_cn":"尼日尔","ab":"NE"},{"country_id":100130,"country_code":234,"country_name_en":"Nigeria","country_name_cn":"尼日利亚","ab":"NG"},{"country_id":100131,"country_code":850,"country_name_en":"North Korea","country_name_cn":"朝鲜","ab":"KP"},{"country_id":100132,"country_code":47,"country_name_en":"Norway","country_name_cn":"挪威","ab":"NO"},{"country_id":100133,"country_code":968,"country_name_en":"Oman","country_name_cn":"阿曼","ab":"OM"},{"country_id":100134,"country_code":92,"country_name_en":"Pakistan","country_name_cn":"巴基斯坦","ab":"PK"},{"country_id":100135,"country_code":507,"country_name_en":"Panama","country_name_cn":"巴拿马","ab":"PA"},{"country_id":100136,"country_code":675,"country_name_en":"Papua New Cuinea","country_name_cn":"巴布亚新几内亚","ab":"PG"},{"country_id":100137,"country_code":595,"country_name_en":"Paraguay","country_name_cn":"巴拉圭","ab":"PY"},{"country_id":100138,"country_code":51,"country_name_en":"Peru","country_name_cn":"秘鲁","ab":"PE"},{"country_id":100139,"country_code":63,"country_name_en":"Philippines","country_name_cn":"菲律宾","ab":"PH"},{"country_id":100140,"country_code":48,"country_name_en":"Poland","country_name_cn":"波兰","ab":"PL"},{"country_id":100141,"country_code":689,"country_name_en":"French Polynesia","country_name_cn":"法属玻利尼西亚","ab":"PF"},{"country_id":100142,"country_code":351,"country_name_en":"Portugal","country_name_cn":"葡萄牙","ab":"PT"},{"country_id":100143,"country_code":1787,"country_name_en":"Puerto Rico","country_name_cn":"波多黎各","ab":"PR"},{"country_id":100144,"country_code":974,"country_name_en":"Qatar","country_name_cn":"卡塔尔","ab":"QA"},{"country_id":100145,"country_code":262,"country_name_en":"Reunion","country_name_cn":"留尼旺","ab":""},{"country_id":100146,"country_code":40,"country_name_en":"Romania","country_name_cn":"罗马尼亚","ab":"RO"},{"country_id":100147,"country_code":7,"country_name_en":"Russia","country_name_cn":"俄罗斯","ab":"RU"},{"country_id":100148,"country_code":1758,"country_name_en":"Saint Lueia","country_name_cn":"圣卢西亚","ab":"LC"},{"country_id":100149,"country_code":1784,"country_name_en":"Saint Vincent","country_name_cn":"圣文森特岛","ab":"VC"},{"country_id":100150,"country_code":684,"country_name_en":"Samoa Eastern","country_name_cn":"东萨摩亚(美)","ab":""},{"country_id":100151,"country_code":685,"country_name_en":"Samoa Western","country_name_cn":"西萨摩亚","ab":""},{"country_id":100152,"country_code":378,"country_name_en":"San Marino","country_name_cn":"圣马力诺","ab":"SM"},{"country_id":100153,"country_code":239,"country_name_en":"Sao Tome and Principe","country_name_cn":"圣多美和普林西比","ab":"ST"},{"country_id":100154,"country_code":966,"country_name_en":"Saudi Arabia","country_name_cn":"沙特阿拉伯","ab":"SA"},{"country_id":100155,"country_code":221,"country_name_en":"Senegal","country_name_cn":"塞内加尔","ab":"SN"},{"country_id":100156,"country_code":248,"country_name_en":"Seychelles","country_name_cn":"塞舌尔","ab":"SC"},{"country_id":100157,"country_code":232,"country_name_en":"Sierra Leone","country_name_cn":"塞拉利昂","ab":"SL"},{"country_id":100158,"country_code":65,"country_name_en":"Singapore","country_name_cn":"新加坡","ab":"SG"},{"country_id":100159,"country_code":421,"country_name_en":"Slovakia","country_name_cn":"斯洛伐克","ab":"SK"},{"country_id":100160,"country_code":386,"country_name_en":"Slovenia","country_name_cn":"斯洛文尼亚","ab":"SI"},{"country_id":100161,"country_code":677,"country_name_en":"Solomon Is","country_name_cn":"所罗门群岛","ab":"SB"},{"country_id":100162,"country_code":252,"country_name_en":"Somali","country_name_cn":"索马里","ab":"SO"},{"country_id":100163,"country_code":27,"country_name_en":"South Africa","country_name_cn":"南非","ab":"ZA"},{"country_id":100164,"country_code":34,"country_name_en":"Spain","country_name_cn":"西班牙","ab":"ES"},{"country_id":100165,"country_code":94,"country_name_en":"Sri Lanka","country_name_cn":"斯里兰卡","ab":"LK"},{"country_id":100166,"country_code":1758,"country_name_en":"St.Lucia","country_name_cn":"圣卢西亚","ab":"LC"},{"country_id":100167,"country_code":1784,"country_name_en":"St.Vincent","country_name_cn":"圣文森特","ab":"VC"},{"country_id":100168,"country_code":249,"country_name_en":"Sudan","country_name_cn":"苏丹","ab":"SD"},{"country_id":100169,"country_code":597,"country_name_en":"Suriname","country_name_cn":"苏里南","ab":"SR"},{"country_id":100170,"country_code":268,"country_name_en":"Swaziland","country_name_cn":"斯威士兰","ab":"SZ"},{"country_id":100171,"country_code":46,"country_name_en":"Sweden","country_name_cn":"瑞典","ab":"SE"},{"country_id":100172,"country_code":41,"country_name_en":"Switzerland","country_name_cn":"瑞士","ab":"CH"},{"country_id":100173,"country_code":963,"country_name_en":"Syria","country_name_cn":"叙利亚","ab":"SY"},{"country_id":100174,"country_code":886,"country_name_en":"Taiwan","country_name_cn":"台湾省","ab":"TW"},{"country_id":100175,"country_code":992,"country_name_en":"Tajikstan","country_name_cn":"塔吉克斯坦","ab":"TJ"},{"country_id":100176,"country_code":255,"country_name_en":"Tanzania","country_name_cn":"坦桑尼亚","ab":"TZ"},{"country_id":100177,"country_code":66,"country_name_en":"Thailand","country_name_cn":"泰国","ab":"TH"},{"country_id":100178,"country_code":228,"country_name_en":"Togo","country_name_cn":"多哥","ab":"TG"},{"country_id":100179,"country_code":676,"country_name_en":"Tonga","country_name_cn":"汤加","ab":"TO"},{"country_id":100180,"country_code":1809,"country_name_en":"Trinidad and Tobago","country_name_cn":"特立尼达和多巴哥","ab":"TT"},{"country_id":100181,"country_code":216,"country_name_en":"Tunisia","country_name_cn":"突尼斯","ab":"TN"},{"country_id":100182,"country_code":90,"country_name_en":"Turkey","country_name_cn":"土耳其","ab":"TR"},{"country_id":100183,"country_code":993,"country_name_en":"Turkmenistan","country_name_cn":"土库曼斯坦","ab":"TM"},{"country_id":100184,"country_code":256,"country_name_en":"Uganda","country_name_cn":"乌干达","ab":"UG"},{"country_id":100185,"country_code":380,"country_name_en":"Ukraine","country_name_cn":"乌克兰","ab":"UA"},{"country_id":100186,"country_code":971,"country_name_en":"United Arab Emirates","country_name_cn":"阿拉伯联合酋长国","ab":"AE"},{"country_id":100187,"country_code":44,"country_name_en":"United Kiongdom","country_name_cn":"英国","ab":"GB"},{"country_id":100188,"country_code":1,"country_name_en":"United States of America","country_name_cn":"美国","ab":"US"},{"country_id":100189,"country_code":598,"country_name_en":"Uruguay","country_name_cn":"乌拉圭","ab":"UY"},{"country_id":100190,"country_code":233,"country_name_en":"Uzbekistan","country_name_cn":"乌兹别克斯坦","ab":"UZ"},{"country_id":100191,"country_code":58,"country_name_en":"Venezuela","country_name_cn":"委内瑞拉","ab":"VE"},{"country_id":100192,"country_code":84,"country_name_en":"Vietnam","country_name_cn":"越南","ab":"VN"},{"country_id":100193,"country_code":967,"country_name_en":"Yemen","country_name_cn":"也门","ab":"YE"},{"country_id":100194,"country_code":381,"country_name_en":"Yugoslavia","country_name_cn":"南斯拉夫","ab":"YU"},{"country_id":100195,"country_code":263,"country_name_en":"Zimbabwe","country_name_cn":"津巴布韦","ab":"ZW"},{"country_id":100196,"country_code":243,"country_name_en":"Zaire","country_name_cn":"扎伊尔","ab":"ZR"},{"country_id":100197,"country_code":260,"country_name_en":"Zambia","country_name_cn":"赞比亚","ab":"ZM"}];
  return nationalityInfo;
}

export function educationInfo(str){
  let educationInfo = [
    {"name": "小学", value: "1"},
    {"name": "初中", value: "2"},
    {"name": "高中", value: "3"},
    {"name": "大专", value: "4"},
    {"name": "本科", value: "5"},
    {"name": "研究生", value: "6"}
  ];
  return educationInfo;
}

export function provinceInfo(str){
  let provinceInfo = [{"ProID":1,"name":"北京市","ProSort":1,"ProRemark":"直辖市"},{"ProID":2,"name":"天津市","ProSort":2,"ProRemark":"直辖市"},{"ProID":3,"name":"河北省","ProSort":5,"ProRemark":"省份"},{"ProID":4,"name":"山西省","ProSort":6,"ProRemark":"省份"},{"ProID":5,"name":"内蒙古自治区","ProSort":32,"ProRemark":"自治区"},{"ProID":6,"name":"辽宁省","ProSort":8,"ProRemark":"省份"},{"ProID":7,"name":"吉林省","ProSort":9,"ProRemark":"省份"},{"ProID":8,"name":"黑龙江省","ProSort":10,"ProRemark":"省份"},{"ProID":9,"name":"上海市","ProSort":3,"ProRemark":"直辖市"},{"ProID":10,"name":"江苏省","ProSort":11,"ProRemark":"省份"},{"ProID":11,"name":"浙江省","ProSort":12,"ProRemark":"省份"},{"ProID":12,"name":"安徽省","ProSort":13,"ProRemark":"省份"},{"ProID":13,"name":"福建省","ProSort":14,"ProRemark":"省份"},{"ProID":14,"name":"江西省","ProSort":15,"ProRemark":"省份"},{"ProID":15,"name":"山东省","ProSort":16,"ProRemark":"省份"},{"ProID":16,"name":"河南省","ProSort":17,"ProRemark":"省份"},{"ProID":17,"name":"湖北省","ProSort":18,"ProRemark":"省份"},{"ProID":18,"name":"湖南省","ProSort":19,"ProRemark":"省份"},{"ProID":19,"name":"广东省","ProSort":20,"ProRemark":"省份"},{"ProID":20,"name":"海南省","ProSort":24,"ProRemark":"省份"},{"ProID":21,"name":"广西壮族自治区","ProSort":28,"ProRemark":"自治区"},{"ProID":22,"name":"甘肃省","ProSort":21,"ProRemark":"省份"},{"ProID":23,"name":"陕西省","ProSort":27,"ProRemark":"省份"},{"ProID":24,"name":"新 疆维吾尔自治区","ProSort":31,"ProRemark":"自治区"},{"ProID":25,"name":"青海省","ProSort":26,"ProRemark":"省份"},{"ProID":26,"name":"宁夏回族自治区","ProSort":30,"ProRemark":"自治区"},{"ProID":27,"name":"重庆市","ProSort":4,"ProRemark":"直辖市"},{"ProID":28,"name":"四川省","ProSort":22,"ProRemark":"省份"},{"ProID":29,"name":"贵州省","ProSort":23,"ProRemark":"省份"},{"ProID":30,"name":"云南省","ProSort":25,"ProRemark":"省份"},{"ProID":31,"name":"西藏自治区","ProSort":29,"ProRemark":"自治区"},{"ProID":32,"name":"台湾省","ProSort":7,"ProRemark":"省份"},{"ProID":33,"name":"澳门特别行政区","ProSort":33,"ProRemark":"特别行政区"},{"ProID":34,"name":"香港特别行政区","ProSort":34,"ProRemark":"特别行政区"}];
  return provinceInfo;
}

export function cityInfo(str){
  let cityInfo = [{"CityID":1,"name":"北京市","ProID":1,"CitySort":1},{"CityID":2,"name":"天津市","ProID":2,"CitySort":2},{"CityID":3,"name":"上海市","ProID":9,"CitySort":3},{"CityID":4,"name":"重庆市","ProID":27,"CitySort":4},{"CityID":5,"name":"邯郸市","ProID":3,"CitySort":5},{"CityID":6,"name":"石家庄市","ProID":3,"CitySort":6},{"CityID":7,"name":"保定市","ProID":3,"CitySort":7},{"CityID":8,"name":"张家口市","ProID":3,"CitySort":8},{"CityID":9,"name":"承德市","ProID":3,"CitySort":9},{"CityID":10,"name":"唐山市","ProID":3,"CitySort":10},{"CityID":11,"name":"廊坊市","ProID":3,"CitySort":11},{"CityID":12,"name":"沧州市","ProID":3,"CitySort":12},{"CityID":13,"name":"衡水市","ProID":3,"CitySort":13},{"CityID":14,"name":"邢台市","ProID":3,"CitySort":14},{"CityID":16,"name":"朔州市","ProID":4,"CitySort":16},{"CityID":17,"name":"忻州市","ProID":4,"CitySort":17},{"CityID":18,"name":"太原市","ProID":4,"CitySort":18},{"CityID":19,"name":"大同市","ProID":4,"CitySort":19},{"CityID":20,"name":"阳泉市","ProID":4,"CitySort":20},{"CityID":21,"name":"晋中市","ProID":4,"CitySort":21},{"CityID":22,"name":"长治市","ProID":4,"CitySort":22},{"CityID":23,"name":"晋城市","ProID":4,"CitySort":23},{"CityID":24,"name":"临汾市","ProID":4,"CitySort":24},{"CityID":25,"name":"吕梁市","ProID":4,"CitySort":25},{"CityID":26,"name":"运城市","ProID":4,"CitySort":26},{"CityID":27,"name":"沈阳市","ProID":6,"CitySort":27},{"CityID":28,"name":"铁岭市","ProID":6,"CitySort":28},{"CityID":29,"name":"大连市","ProID":6,"CitySort":29},{"CityID":30,"name":"鞍山市","ProID":6,"CitySort":30},{"CityID":31,"name":"抚顺市","ProID":6,"CitySort":31},{"CityID":32,"name":"本溪市","ProID":6,"CitySort":32},{"CityID":33,"name":"丹东市","ProID":6,"CitySort":33},{"CityID":34,"name":"锦州市","ProID":6,"CitySort":34},{"CityID":35,"name":"营口市","ProID":6,"CitySort":35},{"CityID":36,"name":"阜新市","ProID":6,"CitySort":36},{"CityID":37,"name":"辽阳市","ProID":6,"CitySort":37},{"CityID":38,"name":"朝阳市","ProID":6,"CitySort":38},{"CityID":39,"name":"盘锦市","ProID":6,"CitySort":39},{"CityID":40,"name":"葫芦岛市","ProID":6,"CitySort":40},{"CityID":41,"name":"长春市","ProID":7,"CitySort":41},{"CityID":42,"name":"吉林市","ProID":7,"CitySort":42},{"CityID":43,"name":"延边朝鲜族自治州","ProID":7,"CitySort":43},{"CityID":44,"name":"四平市","ProID":7,"CitySort":44},{"CityID":45,"name":"通化市","ProID":7,"CitySort":45},{"CityID":46,"name":"白城市","ProID":7,"CitySort":46},{"CityID":47,"name":"辽源市","ProID":7,"CitySort":47},{"CityID":48,"name":"松原市","ProID":7,"CitySort":48},{"CityID":49,"name":"白山市","ProID":7,"CitySort":49},{"CityID":50,"name":"哈尔滨市","ProID":8,"CitySort":50},{"CityID":51,"name":"齐齐哈尔市","ProID":8,"CitySort":51},{"CityID":52,"name":"鸡西市","ProID":8,"CitySort":52},{"CityID":53,"name":"牡丹江市","ProID":8,"CitySort":53},{"CityID":54,"name":"七台河市","ProID":8,"CitySort":54},{"CityID":55,"name":"佳木斯市","ProID":8,"CitySort":55},{"CityID":56,"name":"鹤岗市","ProID":8,"CitySort":56},{"CityID":57,"name":"双鸭山市","ProID":8,"CitySort":57},{"CityID":58,"name":"绥化市","ProID":8,"CitySort":58},{"CityID":59,"name":"黑河市","ProID":8,"CitySort":59},{"CityID":60,"name":"大兴安岭地区","ProID":8,"CitySort":60},{"CityID":61,"name":"伊春市","ProID":8,"CitySort":61},{"CityID":62,"name":"大庆市","ProID":8,"CitySort":62},{"CityID":63,"name":"南京市","ProID":10,"CitySort":63},{"CityID":64,"name":"无锡市","ProID":10,"CitySort":64},{"CityID":65,"name":"镇江市","ProID":10,"CitySort":65},{"CityID":66,"name":"苏州市","ProID":10,"CitySort":66},{"CityID":67,"name":"南通市","ProID":10,"CitySort":67},{"CityID":68,"name":"扬州市","ProID":10,"CitySort":68},{"CityID":69,"name":"盐城市","ProID":10,"CitySort":69},{"CityID":70,"name":"徐州市","ProID":10,"CitySort":70},{"CityID":71,"name":"淮安市","ProID":10,"CitySort":71},{"CityID":72,"name":"连云港市","ProID":10,"CitySort":72},{"CityID":73,"name":"常州市","ProID":10,"CitySort":73},{"CityID":74,"name":"泰州市","ProID":10,"CitySort":74},{"CityID":75,"name":"宿迁市","ProID":10,"CitySort":75},{"CityID":76,"name":"舟山市","ProID":11,"CitySort":76},{"CityID":77,"name":"衢州市","ProID":11,"CitySort":77},{"CityID":78,"name":"杭州市","ProID":11,"CitySort":78},{"CityID":79,"name":"湖州市","ProID":11,"CitySort":79},{"CityID":80,"name":"嘉兴市","ProID":11,"CitySort":80},{"CityID":81,"name":"宁波市","ProID":11,"CitySort":81},{"CityID":82,"name":"绍兴市","ProID":11,"CitySort":82},{"CityID":83,"name":"温州市","ProID":11,"CitySort":83},{"CityID":84,"name":"丽水市","ProID":11,"CitySort":84},{"CityID":85,"name":"金华市","ProID":11,"CitySort":85},{"CityID":86,"name":"台州市","ProID":11,"CitySort":86},{"CityID":87,"name":"合肥市","ProID":12,"CitySort":87},{"CityID":88,"name":"芜湖市","ProID":12,"CitySort":88},{"CityID":89,"name":"蚌埠市","ProID":12,"CitySort":89},{"CityID":90,"name":"淮南市","ProID":12,"CitySort":90},{"CityID":91,"name":"马鞍山市","ProID":12,"CitySort":91},{"CityID":92,"name":"淮北市","ProID":12,"CitySort":92},{"CityID":93,"name":"铜陵市","ProID":12,"CitySort":93},{"CityID":94,"name":"安庆市","ProID":12,"CitySort":94},{"CityID":95,"name":"黄山市","ProID":12,"CitySort":95},{"CityID":96,"name":"滁州市","ProID":12,"CitySort":96},{"CityID":97,"name":"阜阳市","ProID":12,"CitySort":97},{"CityID":98,"name":"宿州市","ProID":12,"CitySort":98},{"CityID":99,"name":"巢湖市","ProID":12,"CitySort":99},{"CityID":100,"name":"六安市","ProID":12,"CitySort":100},{"CityID":101,"name":"亳州市","ProID":12,"CitySort":101},{"CityID":102,"name":"池州市","ProID":12,"CitySort":102},{"CityID":103,"name":"宣城市","ProID":12,"CitySort":103},{"CityID":104,"name":"福州市","ProID":13,"CitySort":104},{"CityID":105,"name":"厦门市","ProID":13,"CitySort":105},{"CityID":106,"name":"宁德市","ProID":13,"CitySort":106},{"CityID":107,"name":"莆田市","ProID":13,"CitySort":107},{"CityID":108,"name":"泉州市","ProID":13,"CitySort":108},{"CityID":109,"name":"漳州市","ProID":13,"CitySort":109},{"CityID":110,"name":"龙岩市","ProID":13,"CitySort":110},{"CityID":111,"name":"三明市","ProID":13,"CitySort":111},{"CityID":112,"name":"南平市","ProID":13,"CitySort":112},{"CityID":113,"name":"鹰潭市","ProID":14,"CitySort":113},{"CityID":114,"name":"新余市","ProID":14,"CitySort":114},{"CityID":115,"name":"南昌市","ProID":14,"CitySort":115},{"CityID":116,"name":"九江市","ProID":14,"CitySort":116},{"CityID":117,"name":"上饶市","ProID":14,"CitySort":117},{"CityID":118,"name":"抚州市","ProID":14,"CitySort":118},{"CityID":119,"name":"宜春市","ProID":14,"CitySort":119},{"CityID":120,"name":"吉安市","ProID":14,"CitySort":120},{"CityID":121,"name":"赣州市","ProID":14,"CitySort":121},{"CityID":122,"name":"景德镇市","ProID":14,"CitySort":122},{"CityID":123,"name":"萍乡市","ProID":14,"CitySort":123},{"CityID":124,"name":"菏泽市","ProID":15,"CitySort":124},{"CityID":125,"name":"济南市","ProID":15,"CitySort":125},{"CityID":126,"name":"青岛市","ProID":15,"CitySort":126},{"CityID":127,"name":"淄博市","ProID":15,"CitySort":127},{"CityID":128,"name":"德州市","ProID":15,"CitySort":128},{"CityID":129,"name":"烟台市","ProID":15,"CitySort":129},{"CityID":130,"name":"潍坊市","ProID":15,"CitySort":130},{"CityID":131,"name":"济宁市","ProID":15,"CitySort":131},{"CityID":132,"name":"泰安市","ProID":15,"CitySort":132},{"CityID":133,"name":"临沂市","ProID":15,"CitySort":133},{"CityID":134,"name":"滨州市","ProID":15,"CitySort":134},{"CityID":135,"name":"东营市","ProID":15,"CitySort":135},{"CityID":136,"name":"威海市","ProID":15,"CitySort":136},{"CityID":137,"name":"枣庄市","ProID":15,"CitySort":137},{"CityID":138,"name":"日照市","ProID":15,"CitySort":138},{"CityID":139,"name":"莱芜市","ProID":15,"CitySort":139},{"CityID":140,"name":"聊城市","ProID":15,"CitySort":140},{"CityID":141,"name":"商丘市","ProID":16,"CitySort":141},{"CityID":142,"name":"郑州市","ProID":16,"CitySort":142},{"CityID":143,"name":"安阳市","ProID":16,"CitySort":143},{"CityID":144,"name":"新乡市","ProID":16,"CitySort":144},{"CityID":145,"name":"许昌市","ProID":16,"CitySort":145},{"CityID":146,"name":"平顶山市","ProID":16,"CitySort":146},{"CityID":147,"name":"信阳市","ProID":16,"CitySort":147},{"CityID":148,"name":"南阳市","ProID":16,"CitySort":148},{"CityID":149,"name":"开封市","ProID":16,"CitySort":149},{"CityID":150,"name":"洛阳市","ProID":16,"CitySort":150},{"CityID":151,"name":"济源市","ProID":16,"CitySort":151},{"CityID":152,"name":"焦作市","ProID":16,"CitySort":152},{"CityID":153,"name":"鹤壁市","ProID":16,"CitySort":153},{"CityID":154,"name":"濮阳市","ProID":16,"CitySort":154},{"CityID":155,"name":"周口市","ProID":16,"CitySort":155},{"CityID":156,"name":"漯河市","ProID":16,"CitySort":156},{"CityID":157,"name":"驻马店市","ProID":16,"CitySort":157},{"CityID":158,"name":"三门峡市","ProID":16,"CitySort":158},{"CityID":159,"name":"武汉市","ProID":17,"CitySort":159},{"CityID":160,"name":"襄樊市","ProID":17,"CitySort":160},{"CityID":161,"name":"鄂州市","ProID":17,"CitySort":161},{"CityID":162,"name":"孝感市","ProID":17,"CitySort":162},{"CityID":163,"name":"黄冈市","ProID":17,"CitySort":163},{"CityID":164,"name":"黄石市","ProID":17,"CitySort":164},{"CityID":165,"name":"咸宁市","ProID":17,"CitySort":165},{"CityID":166,"name":"荆州市","ProID":17,"CitySort":166},{"CityID":167,"name":"宜昌市","ProID":17,"CitySort":167},{"CityID":168,"name":"恩施土家族苗族自治州","ProID":17,"CitySort":168},{"CityID":169,"name":"神农架林区","ProID":17,"CitySort":169},{"CityID":170,"name":"十堰市","ProID":17,"CitySort":170},{"CityID":171,"name":"随州市","ProID":17,"CitySort":171},{"CityID":172,"name":"荆门市","ProID":17,"CitySort":172},{"CityID":173,"name":"仙桃市","ProID":17,"CitySort":173},{"CityID":174,"name":"天门市","ProID":17,"CitySort":174},{"CityID":175,"name":"潜江市","ProID":17,"CitySort":175},{"CityID":176,"name":"岳阳市","ProID":18,"CitySort":176},{"CityID":177,"name":"长沙市","ProID":18,"CitySort":177},{"CityID":178,"name":"湘潭市","ProID":18,"CitySort":178},{"CityID":179,"name":"株洲市","ProID":18,"CitySort":179},{"CityID":180,"name":"衡阳市","ProID":18,"CitySort":180},{"CityID":181,"name":"郴州市","ProID":18,"CitySort":181},{"CityID":182,"name":"常德市","ProID":18,"CitySort":182},{"CityID":183,"name":"益阳市","ProID":18,"CitySort":183},{"CityID":184,"name":"娄底市","ProID":18,"CitySort":184},{"CityID":185,"name":"邵阳市","ProID":18,"CitySort":185},{"CityID":186,"name":"湘西土家族苗族自治州","ProID":18,"CitySort":186},{"CityID":187,"name":"张家界市","ProID":18,"CitySort":187},{"CityID":188,"name":"怀化市","ProID":18,"CitySort":188},{"CityID":189,"name":"永州市","ProID":18,"CitySort":189},{"CityID":190,"name":"广州市","ProID":19,"CitySort":190},{"CityID":191,"name":"汕尾市","ProID":19,"CitySort":191},{"CityID":192,"name":"阳江市","ProID":19,"CitySort":192},{"CityID":193,"name":"揭阳市","ProID":19,"CitySort":193},{"CityID":194,"name":"茂名市","ProID":19,"CitySort":194},{"CityID":195,"name":"惠州市","ProID":19,"CitySort":195},{"CityID":196,"name":"江门市","ProID":19,"CitySort":196},{"CityID":197,"name":"韶关市","ProID":19,"CitySort":197},{"CityID":198,"name":"梅州市","ProID":19,"CitySort":198},{"CityID":199,"name":"汕头市","ProID":19,"CitySort":199},{"CityID":200,"name":"深圳市","ProID":19,"CitySort":200},{"CityID":201,"name":"珠海市","ProID":19,"CitySort":201},{"CityID":202,"name":"佛山市","ProID":19,"CitySort":202},{"CityID":203,"name":"肇庆市","ProID":19,"CitySort":203},{"CityID":204,"name":"湛江市","ProID":19,"CitySort":204},{"CityID":205,"name":"中山市","ProID":19,"CitySort":205},{"CityID":206,"name":"河源市","ProID":19,"CitySort":206},{"CityID":207,"name":"清远市","ProID":19,"CitySort":207},{"CityID":208,"name":"云浮市","ProID":19,"CitySort":208},{"CityID":209,"name":"潮州市","ProID":19,"CitySort":209},{"CityID":210,"name":"东莞市","ProID":19,"CitySort":210},{"CityID":211,"name":"兰州市","ProID":22,"CitySort":211},{"CityID":212,"name":"金昌市","ProID":22,"CitySort":212},{"CityID":213,"name":"白银市","ProID":22,"CitySort":213},{"CityID":214,"name":"天水市","ProID":22,"CitySort":214},{"CityID":215,"name":"嘉峪关市","ProID":22,"CitySort":215},{"CityID":216,"name":"武威市","ProID":22,"CitySort":216},{"CityID":217,"name":"张掖市","ProID":22,"CitySort":217},{"CityID":218,"name":"平凉市","ProID":22,"CitySort":218},{"CityID":219,"name":"酒泉市","ProID":22,"CitySort":219},{"CityID":220,"name":"庆阳市","ProID":22,"CitySort":220},{"CityID":221,"name":"定西市","ProID":22,"CitySort":221},{"CityID":222,"name":"陇南市","ProID":22,"CitySort":222},{"CityID":223,"name":"临夏回族自治州","ProID":22,"CitySort":223},{"CityID":224,"name":"甘南藏族自治州","ProID":22,"CitySort":224},{"CityID":225,"name":"成都市","ProID":28,"CitySort":225},{"CityID":226,"name":"攀枝花市","ProID":28,"CitySort":226},{"CityID":227,"name":"自贡市","ProID":28,"CitySort":227},{"CityID":228,"name":"绵阳市","ProID":28,"CitySort":228},{"CityID":229,"name":"南充市","ProID":28,"CitySort":229},{"CityID":230,"name":"达州市","ProID":28,"CitySort":230},{"CityID":231,"name":"遂宁市","ProID":28,"CitySort":231},{"CityID":232,"name":"广安市","ProID":28,"CitySort":232},{"CityID":233,"name":"巴中市","ProID":28,"CitySort":233},{"CityID":234,"name":"泸州市","ProID":28,"CitySort":234},{"CityID":235,"name":"宜宾市","ProID":28,"CitySort":235},{"CityID":236,"name":"资阳市","ProID":28,"CitySort":236},{"CityID":237,"name":"内江市","ProID":28,"CitySort":237},{"CityID":238,"name":"乐山市","ProID":28,"CitySort":238},{"CityID":239,"name":"眉山市","ProID":28,"CitySort":239},{"CityID":240,"name":"凉山彝族自治州","ProID":28,"CitySort":240},{"CityID":241,"name":"雅安市","ProID":28,"CitySort":241},{"CityID":242,"name":"甘孜藏族自治州","ProID":28,"CitySort":242},{"CityID":243,"name":"阿坝藏族羌族自治州","ProID":28,"CitySort":243},{"CityID":244,"name":"德阳市","ProID":28,"CitySort":244},{"CityID":245,"name":"广元市","ProID":28,"CitySort":245},{"CityID":246,"name":"贵阳市","ProID":29,"CitySort":246},{"CityID":247,"name":"遵义市","ProID":29,"CitySort":247},{"CityID":248,"name":"安顺市","ProID":29,"CitySort":248},{"CityID":249,"name":"黔南布依族苗族自治州","ProID":29,"CitySort":249},{"CityID":250,"name":"黔东南苗族侗族自治州","ProID":29,"CitySort":250},{"CityID":251,"name":"铜仁地区","ProID":29,"CitySort":251},{"CityID":252,"name":"毕节地区","ProID":29,"CitySort":252},{"CityID":253,"name":"六盘水市","ProID":29,"CitySort":253},{"CityID":254,"name":"黔西南布依族苗族自治州","ProID":29,"CitySort":254},{"CityID":255,"name":"海口市","ProID":20,"CitySort":255},{"CityID":256,"name":"三亚市","ProID":20,"CitySort":256},{"CityID":257,"name":"五指山市","ProID":20,"CitySort":257},{"CityID":258,"name":"琼海市","ProID":20,"CitySort":258},{"CityID":259,"name":"儋州市","ProID":20,"CitySort":259},{"CityID":260,"name":"文昌市","ProID":20,"CitySort":260},{"CityID":261,"name":"万宁市","ProID":20,"CitySort":261},{"CityID":262,"name":"东方市","ProID":20,"CitySort":262},{"CityID":263,"name":"澄迈县","ProID":20,"CitySort":263},{"CityID":264,"name":"定安县","ProID":20,"CitySort":264},{"CityID":265,"name":"屯昌县","ProID":20,"CitySort":265},{"CityID":266,"name":"临高县","ProID":20,"CitySort":266},{"CityID":267,"name":"白沙黎族自治县","ProID":20,"CitySort":267},{"CityID":268,"name":"昌江黎族自治县","ProID":20,"CitySort":268},{"CityID":269,"name":"乐东黎族自治县","ProID":20,"CitySort":269},{"CityID":270,"name":"陵水黎族自治县","ProID":20,"CitySort":270},{"CityID":271,"name":"保亭黎族苗族自治县","ProID":20,"CitySort":271},{"CityID":272,"name":"琼中黎族苗族自治县","ProID":20,"CitySort":272},{"CityID":273,"name":"西双版纳傣族自治州","ProID":30,"CitySort":273},{"CityID":274,"name":"德宏傣族景颇族自治州","ProID":30,"CitySort":274},{"CityID":275,"name":"昭通市","ProID":30,"CitySort":275},{"CityID":276,"name":"昆明市","ProID":30,"CitySort":276},{"CityID":277,"name":"大理白族自治州","ProID":30,"CitySort":277},{"CityID":278,"name":"红河哈尼族彝族自治州","ProID":30,"CitySort":278},{"CityID":279,"name":"曲靖市","ProID":30,"CitySort":279},{"CityID":280,"name":"保山市","ProID":30,"CitySort":280},{"CityID":281,"name":"文山壮族苗族自治州","ProID":30,"CitySort":281},{"CityID":282,"name":"玉溪市","ProID":30,"CitySort":282},{"CityID":283,"name":"楚雄彝族自治州","ProID":30,"CitySort":283},{"CityID":284,"name":"普洱市","ProID":30,"CitySort":284},{"CityID":285,"name":"临沧市","ProID":30,"CitySort":285},{"CityID":286,"name":"怒江傈傈族自治州","ProID":30,"CitySort":286},{"CityID":287,"name":"迪庆藏族自治州","ProID":30,"CitySort":287},{"CityID":288,"name":"丽江市","ProID":30,"CitySort":288},{"CityID":289,"name":"海北藏族自治州","ProID":25,"CitySort":289},{"CityID":290,"name":"西宁市","ProID":25,"CitySort":290},{"CityID":291,"name":"海东地区","ProID":25,"CitySort":291},{"CityID":292,"name":"黄南藏族自治州","ProID":25,"CitySort":292},{"CityID":293,"name":"海南藏族自治州","ProID":25,"CitySort":293},{"CityID":294,"name":"果洛藏族自治州","ProID":25,"CitySort":294},{"CityID":295,"name":"玉树藏族自治州","ProID":25,"CitySort":295},{"CityID":296,"name":"海西蒙古族藏族自治州","ProID":25,"CitySort":296},{"CityID":297,"name":"西安市","ProID":23,"CitySort":297},{"CityID":298,"name":"咸阳市","ProID":23,"CitySort":298},{"CityID":299,"name":"延安市","ProID":23,"CitySort":299},{"CityID":300,"name":"榆林市","ProID":23,"CitySort":300},{"CityID":301,"name":"渭南市","ProID":23,"CitySort":301},{"CityID":302,"name":"商洛市","ProID":23,"CitySort":302},{"CityID":303,"name":"安康市","ProID":23,"CitySort":303},{"CityID":304,"name":"汉中市","ProID":23,"CitySort":304},{"CityID":305,"name":"宝鸡市","ProID":23,"CitySort":305},{"CityID":306,"name":"铜川市","ProID":23,"CitySort":306},{"CityID":307,"name":"防城港市","ProID":21,"CitySort":307},{"CityID":308,"name":"南宁市","ProID":21,"CitySort":308},{"CityID":309,"name":"崇左市","ProID":21,"CitySort":309},{"CityID":310,"name":"来宾市","ProID":21,"CitySort":310},{"CityID":311,"name":"柳州市","ProID":21,"CitySort":311},{"CityID":312,"name":"桂林市","ProID":21,"CitySort":312},{"CityID":313,"name":"梧州市","ProID":21,"CitySort":313},{"CityID":314,"name":"贺州市","ProID":21,"CitySort":314},{"CityID":315,"name":"贵港市","ProID":21,"CitySort":315},{"CityID":316,"name":"玉林市","ProID":21,"CitySort":316},{"CityID":317,"name":"百色市","ProID":21,"CitySort":317},{"CityID":318,"name":"钦州市","ProID":21,"CitySort":318},{"CityID":319,"name":"河池市","ProID":21,"CitySort":319},{"CityID":320,"name":"北海市","ProID":21,"CitySort":320},{"CityID":321,"name":"拉萨市","ProID":31,"CitySort":321},{"CityID":322,"name":"日喀则地区","ProID":31,"CitySort":322},{"CityID":323,"name":"山南地区","ProID":31,"CitySort":323},{"CityID":324,"name":"林芝地区","ProID":31,"CitySort":324},{"CityID":325,"name":"昌都地区","ProID":31,"CitySort":325},{"CityID":326,"name":"那曲地区","ProID":31,"CitySort":326},{"CityID":327,"name":"阿里地区","ProID":31,"CitySort":327},{"CityID":328,"name":"银川市","ProID":26,"CitySort":328},{"CityID":329,"name":"石嘴山市","ProID":26,"CitySort":329},{"CityID":330,"name":"吴忠市","ProID":26,"CitySort":330},{"CityID":331,"name":"固原市","ProID":26,"CitySort":331},{"CityID":332,"name":"中卫市","ProID":26,"CitySort":332},{"CityID":333,"name":"塔城地区","ProID":24,"CitySort":333},{"CityID":334,"name":"哈密地区","ProID":24,"CitySort":334},{"CityID":335,"name":"和田地区","ProID":24,"CitySort":335},{"CityID":336,"name":"阿勒泰地区","ProID":24,"CitySort":336},{"CityID":337,"name":"克孜勒苏柯尔克孜自治州","ProID":24,"CitySort":337},{"CityID":338,"name":"博尔塔拉蒙古自治州","ProID":24,"CitySort":338},{"CityID":339,"name":"克拉玛依市","ProID":24,"CitySort":339},{"CityID":340,"name":"乌鲁木齐市","ProID":24,"CitySort":340},{"CityID":341,"name":"石河子市","ProID":24,"CitySort":341},{"CityID":342,"name":"昌吉回族自治州","ProID":24,"CitySort":342},{"CityID":343,"name":"五家渠市","ProID":24,"CitySort":343},{"CityID":344,"name":"吐鲁番地区","ProID":24,"CitySort":344},{"CityID":345,"name":"巴音郭楞蒙古自治州","ProID":24,"CitySort":345},{"CityID":346,"name":"阿克苏地区","ProID":24,"CitySort":346},{"CityID":347,"name":"阿拉尔市","ProID":24,"CitySort":347},{"CityID":348,"name":"喀什地区","ProID":24,"CitySort":348},{"CityID":349,"name":"图木舒克市","ProID":24,"CitySort":349},{"CityID":350,"name":"伊犁哈萨克自治州","ProID":24,"CitySort":350},{"CityID":351,"name":"呼伦贝尔市","ProID":5,"CitySort":351},{"CityID":352,"name":"呼和浩特市","ProID":5,"CitySort":352},{"CityID":353,"name":"包头市","ProID":5,"CitySort":353},{"CityID":354,"name":"乌海市","ProID":5,"CitySort":354},{"CityID":355,"name":"乌兰察布市","ProID":5,"CitySort":355},{"CityID":356,"name":"通辽市","ProID":5,"CitySort":356},{"CityID":357,"name":"赤峰市","ProID":5,"CitySort":357},{"CityID":358,"name":"鄂尔多斯市","ProID":5,"CitySort":358},{"CityID":359,"name":"巴彦淖尔市","ProID":5,"CitySort":359},{"CityID":360,"name":"锡林郭勒盟","ProID":5,"CitySort":360},{"CityID":361,"name":"兴安盟","ProID":5,"CitySort":361},{"CityID":362,"name":"阿拉善盟","ProID":5,"CitySort":362},{"CityID":363,"name":"台北市","ProID":32,"CitySort":363},{"CityID":364,"name":"高雄市","ProID":32,"CitySort":364},{"CityID":365,"name":"基隆市","ProID":32,"CitySort":365},{"CityID":366,"name":"台中市","ProID":32,"CitySort":366},{"CityID":367,"name":"台南市","ProID":32,"CitySort":367},{"CityID":368,"name":"新竹市","ProID":32,"CitySort":368},{"CityID":369,"name":"嘉义市","ProID":32,"CitySort":369},{"CityID":370,"name":"澳门特别行政区","ProID":33,"CitySort":370},{"CityID":371,"name":"香港特别行政区","ProID":34,"CitySort":371}];
  return cityInfo;
}

export function provinceArrayInfo(str){
  let provinceInfo = [{"label":"北京","children":["北京"]},{"label":"广东","children":["广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"]},{"label":"上海","children":["上海"]},{"label":"天津","children":["天津"]},{"label":"重庆","children":["重庆"]},{"label":"辽宁","children":["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},{"label":"江苏","children":["南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁"]},{"label":"湖北","children":["武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","天门","潜江","神农架林区"]},{"label":"四川","children":["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},{"label":"陕西","children":["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"]},{"label":"河北","children":["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"]},{"label":"山西","children":["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]},{"label":"河南","children":["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"]},{"label":"吉林","children":["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"]},{"label":"黑龙江","children":["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区"]},{"label":"内蒙古","children":["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","锡林郭勒盟","兴安盟","阿拉善盟"]},{"label":"山东","children":["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]},{"label":"安徽","children":["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"]},{"label":"浙江","children":["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]},{"label":"福建","children":["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},{"label":"湖南","children":["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州"]},{"label":"广西","children":["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"]},{"label":"江西","children":["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]},{"label":"贵州","children":["贵阳","六盘水","遵义","安顺","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},{"label":"贵州","children":["贵阳","六盘水","遵义","安顺","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},{"label":"云南","children":["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州","大理白族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州"]},{"label":"西藏","children":["拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"]},{"label":"海南","children":["海口","三亚","五指山","琼海","儋州","文昌","万宁","东方","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"]},{"label":"甘肃","children":["兰州","嘉峪关","金昌","白银","天水","武威","酒泉","张掖","庆阳","平凉","定西","陇南","临夏回族自治州","甘南藏族自治州"]},{"label":"宁夏","children":["银川","石嘴山","吴忠","固原","中卫"]},{"label":"青海","children":["西宁","海东地区","海北藏族自治州","海南藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},{"label":"新疆","children":["乌鲁木齐","克拉玛依","吐鲁番地区","哈密地区","和田地区","阿克苏地区","喀什地区","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","昌吉回族自治州","博尔塔拉蒙古自治州","石河子","阿拉尔","图木舒克","五家渠","伊犁哈萨克自治州"]},{"label":"香港","children":["香港"]},{"label":"澳门","children":["澳门"]},{"label":"台湾","children":["台北市","高雄市","台北县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","宜兰县","花莲县","台东县","澎湖县","基隆市","新竹市","台中市","嘉义市","台南市"]}];
  return provinceInfo;
}

export function teacherTypeInfo(str){
  let typeInfo = [{
    "name": "校本部教职工",
    "checked": true,
    "code": "10"
  }, {
    "name": "专任教师",
    "checked": false,
    "code": "11"
  }, {
    "name": "教辅人员",
    "checked": false,
    "code": "12"
  }, {
    "name": "行政人员",
    "checked": false,
    "code": "13"
  }, {
    "name": "工勤人员",
    "checked": false,
    "code": "14"
  }, {
    "name": "其他校本部教职工",
    "checked": false,
    "code": "19"
  }, {
    "name": "科研机构人员",
    "checked": false,
    "code": "20"
  }, {
    "name": "校办企业职工",
    "checked": false,
    "code": "30"
  }, {
    "name": "其他副设机构人员",
    "checked": false,
    "code": "40"
  }, {
    "name": "聘请校外教师",
    "checked": false,
    "code": "50"
  }, {
    "name": "来自高校以外事业、科研单位",
    "checked": false,
    "code": "51"
  }, {
    "name": "来自校外企业",
    "checked": false,
    "code": "52"
  }, {
    "name": "国外聘请",
    "checked": false,
    "code": "53"
  }, {
    "name": "来自其他高校",
    "checked": false,
    "code": "54"
  }, {
    "name": "代课教师",
    "checked": false,
    "code": "55"
  }, {
    "name": "兼任教师",
    "checked": false,
    "code": "56"
  }, {
    "name": "其他兼任教师",
    "checked": false,
    "code": "59"
  }, {
    "name": "其他人员",
    "checked": false,
    "code": "60"
  }, {
    "name": "附属中小学幼儿园教职工",
    "checked": false,
    "code": "61"
  }, {
    "name": "集体所有制人员",
    "checked": false,
    "code": "62"
  }, {
    "name": "其他教职工",
    "checked": false,
    "code": "99"
  }];
  return typeInfo;
}

export function studyType(type, str){
  let studyType = {
    "1":{"code":1,"name":"走读","checked":true},
    "2":{"code":2,"name":"住校","checked":false},
    "3":{"code":3,"name":"借宿","checked":false},
    "9":{"code":9,"name":"其他","checked":false}};
  if (str && type == 'set') {
    return studyType[str];
  }
  if (!str && type == 'get'){
    return studyType;
  }
}

export function gradeText(val){
  let gradeList = ['一年级','二年级','三年级','四年级','五年级'];
  return gradeList[parseInt(val)-1];
}

export function weekNoText(val){
  let gradeList = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
  return gradeList[parseInt(val)-1];
}

export function weekNoText2(val){
  let gradeList = ['周一','周二','周三','周四','周五','周六','周日'];
  return gradeList[parseInt(val)-1];
}

export function auditStatusText(val){
  let statusList = {
    "0": "待审批",
    "1": "已通过",
    "2": "已驳回",
    "3": "已通过",
    "4": "已驳回",
    "5": "",
  };
  return statusList[val];
}

export function auditStatusColor(val){
  let statusList = {
    "0": "color-muted",
    "1": "color-success",
    "2": "color-danger",
    "3": "color-success",
    "4": "color-success",
    "5": "color-warning",
  };
  return statusList[val];
}

export function insterestText(val){
  let statusList = {
    "0": "独立产权",
    "1": "联合产权",
    "2": "租用"
  };
  return statusList[val];
}

export function dormTypeText(val){
  let statusList = {
    "0": "男生宿舍",
    "1": "女生宿舍"
  };
  return statusList[val];
}

export function areaTypeText(val){
  let statusList = {
    "1": "个人区域",
    "2": "公共区域",
    "3": "空床"
  };
  return statusList[val];
}

export function levelText(val){
  let statusList = {
    "1": "等级1",
    "2": "等级2",
    "3": "等级3"
  };
  return statusList;
}

export function mediaClassText(val){
  let statusList = {
    "true": "多媒体教室",
    "false": "普通教室"
  };
  return statusList[val];
}

export function meetingStatusText(type, str){
  let meetingStatus = {
    "1": "未开始",
    "2": "进行中",
    "3": "已结束"
  };
  if (str && type == 'set') {
    return meetingStatus[str];
  }
  if (!str && type == 'get'){
    return meetingStatus;
  }
}

export function meetingUserStatusText(type, str){
  let meetingUserStatus = {
    "1": "缺勤",
    "2": "请假",
    "3": "正常出勤"
  };
  if (str && type == 'set') {
    return meetingUserStatus[str];
  }
  if (!str && type == 'get'){
    return meetingUserStatus;
  }
}

export function meetingJoinStatusText(type, str){
  let meetingJoinStatus = {
    "1": "缺席",
    "2": "请假",
    "3": "正常"
  };
  if (str && type == 'set') {
    return meetingJoinStatus[str];
  }
  if (!str && type == 'get'){
    return meetingJoinStatus;
  }
}

export function dormStatus(type, str){
  let dormStatusList = {
    "0": "未归",
    "1": "已归寝",
    "2": "请假",
    "3": "晚归",
    "4": "超长未归"
  };
  if (str != null && type == 'set') {
    return dormStatusList[str];
  }
  if (!str && type == 'get'){
    return dormStatusList;
  }
}

export function classAttendStatus(type, str){
  let classStatusList = {
    "1": "出勤",
    "3": "迟到",
    "4": "早退",
    "0": "旷课",
    "2": "请假"
  };
  if (str != null && type == 'set') {
    return classStatusList[str];
  }
  if (!str && type == 'get'){
    return classStatusList;
  }
}

export function serverType(type, str){
  let serverType = {
    "0": "学生办事",
    "1": "老师办事",
    "2": "单位办事"
  };
  if (str != null && type == 'set') {
    return serverType[str];
  }
  if (!str && type == 'get'){
    return serverType;
  }
}

export function serverFormType(type, str){
  let serverFormType = {
    "0": "普通服务",
    "1": "流程服务",
    "2": "统计服务"
  };
  if (str != null && type == 'set') {
    return serverFormType[str];
  }
  if (!str && type == 'get'){
    return serverFormType;
  }
}

export function flowAuditItemType(str, type){
  let flowAuditType = {
    "1": "固定人审批",
    "2": "系统角色审批",
    "3": "发起人自选审批",
    "4": "抄送给固定人",
    "5": "抄送给系统角色",
    "6": "自选抄送人"
  };
  if (str && type == 'set') {
    return flowAuditType[str];
  }
  if (!str && type == 'get'){
    return flowAuditType;
  }
}

export function newStudentFlowAuditItemType(str, type){
  if (str == 0){
    str = '00';
  }
  let flowAuditType = {
    "1": "现场报到(系统)",
    "3": "现场缴费(系统)",
    "4": "信息采集(系统)",
    "00": "接站登记(系统)",
    "2": "线上选寝(系统)",
    "5": "打印报到单(系统)",
    "9": "自定义环节"
  };
  if (str && type == 'set') {
    return flowAuditType[str];
  }
  if (!str && type == 'get'){
    return flowAuditType;
  }
}

export function trainsType(str, type){
  let trainsType = {
    "1": "飞机",
    "2": "火车",
    "3": "轮船",
    "4": "巴士",
    "5": "自驾"
  };
  if (str && type == 'set') {
    return trainsType[str];
  }
  if (!str && type == 'get'){
    return trainsType;
  }
}

export function getWeekTotalSelect(){
  let arr = [];
  for (let i = 0; i < 52; i++){
    arr.push({
      label: i+1,
      value: i+1
    });
  }
  return arr;
}


export function setSelectOptions(val){
  let arr = [];
  for (let i = 0; i < val; i++){
    arr.push({
      label: i+1,
      value: i+1
    });
  }
  return arr;
}

export function inArray(search,array,tag){
  for(var i in array){
    if (tag){
      if(array[i][tag] == search[tag]){
        return i;
      }
    }else {
      if(array[i] == search){
        return i;
      }
    }
  }
  return -1;
}

export function paddingChecked(src,des,tag,desTag){
  for (let j = 0; j < src.length; j++){
    if (src[j] == des[tag]){
      des[desTag] = true;
    }
  }
}

export function secondsFormat(min) {
  if(min || min == 0){
    var seconds = min * 60;
    var day = Math.floor( seconds/ (24*3600) ); // Math.floor()向下取整
    var hour = Math.floor( (seconds - day*24*3600) / 3600);
    var minute = Math.floor( (seconds - day*24*3600 - hour*3600) /60 );
    var second = seconds - day*24*3600 - hour*3600 - minute*60;
    return day + "天"  + hour + "时" + minute + "分" + second + "秒";
  }else{
    return '--';
  }
}

export function decodeUTF8(str){
  if(str){
    return decodeURIComponent(str);
  }else {
    return '';
  }
}
