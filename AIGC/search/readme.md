# 搜索

- 项目亮点 
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端 防抖或节流
    - 后端 
       - SQL  posts LIKE '%${keyword}%'
       - 各种数据放入hadop flink 
       - Elastic Search node
    - AIGC

- 数据问题
    - python 爬虫 
    - AIGC 生成数据 
        get_response
        prompt 电商网站 手机 50 条

## 数据清洗
- pandas 来处理AIGC 给们生成的text文本
    - 先切割 用split('\n')按换行符切割
    - pandas 提供了DataFrame 实例
        pd.DataFrame({"product_name"}) column_name
    - pd.head()
        如果不指定的话，默认输出五条

- 文本  如何转变成向量，数学表达 openai 提供embedding 接口
    cosin 值
- openai Completion接口 \ chat 接口
- embedding
    openai 的新接口
    查询 keyword 和 数据 都进行 向量计算
    cosine_smilarity 两个向量间的相似度 如果无限接近0 ，基本相同或相似的
    如果不相等值会越来越大，甚至相反会是负值