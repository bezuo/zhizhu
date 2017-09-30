export default {
	init(selectedValues) {
		
		let arr = [], skuItems = [];
		
		selectedValues.forEach((item, index) => {
			
			let itemValues = item.values;
			
			if(itemValues.length != 0) {
				
				itemValues.forEach((value, Number) => {
				
					value.propId = item.propId
					value.propName = item.propName;
				});
				skuItems.push(itemValues);
			}
		})
//		console.log(skuItems);
			
		let ret = this.descartes(skuItems);		
		// 生成的sku表格数据
		ret.forEach((item, index) => {
			let sku = { 
					price:'',
					stock: ''
				};
			sku.values = item;
			arr.push(sku);
		});
//		console.log(arr);
//		console.log(JSON.stringify(arr));
		return arr;
	},
	
	descartes(list){
        //parent上一级索引;count指针计数
        var point = {};
        var result = [];
        var pIndex = null;
        var tempCount = 0;
        var temp  = [];
        //根据参数列生成指针对象
        for(var index in list)
        {
            if(typeof list[index] == 'object')
            {
                point[index] = {'parent':pIndex,'count':0}
                pIndex = index;
            }
        }
        //单维度数据结构直接返回
        if(pIndex == null)
        {
            return list;
        }
        //动态生成笛卡尔积
        while(true)
        {
            for(var index in list)
            {
                tempCount = point[index]['count'];
                temp.push(list[index][tempCount]);
            }
            //压入结果数组
            result.push(temp);
            temp = [];
            //检查指针最大值问题
            while(true)
            {
                if(point[index]['count']+1 >= list[index].length)
                {
                    point[index]['count'] = 0;
                    pIndex = point[index]['parent'];
                    if(pIndex == null)
                    {
                        return result;
                    }
                    //赋值parent进行再次检查
                    index = pIndex;
                }
                else
                {
                    point[index]['count']++;
                    break;
                }
            }
        }
	},
	
	// 格式化sku信息
	submitSku(creatSkuItem, selectedSku) {
		
		let skuModel = {}, skuProps = [], ppathIdmap = {};
		
		creatSkuItem.forEach((item, index) => {
			
			let attrName = '', info = "", attrValue = {};
			
			attrValue.price = item.price;					// 价格
			
			// 循环每一项sku的values值，将propId与valueId拼接
			item.values.forEach((values, _number) => {
				
				// 最后一个不需要加";"
				item.values.length-1 > _number ?					
					attrName += values.propId + ":" + values.valueId + ";" :
					attrName += values.propId + ":" + values.valueId;
					
				// 最后一个不需要加";"
				item.values.length-1 > _number ?					
					info += values.propName + ":" + values.valueName + ";" :
					info += values.propName + ":" + values.valueName;	
			})
			
			attrValue.skuInfo = info;			
			ppathIdmap[attrName] = attrValue;		
		});
		
		selectedSku.forEach((item, index) => {
			
			let obj = {}, arr = [];
			obj.propId = item.propId;							// 属性id
			obj.propName = item.propName;						// 属性名称
			
			item.values.forEach((value, _number) => {
				
				let valueObj = {};
				valueObj.valueId = value.valueId;				// 值ID
				valueObj.valueName = value.valueName;			// 值名称
				arr.push(valueObj);
			});
			
			obj.values = arr;
			skuProps.push(obj);
		});
		
		skuModel.skuProps = skuProps;
		skuModel.ppathIdmap = ppathIdmap;		
		console.log(skuModel);
	}
}