import openai
openai.api_key="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"   #openai 的 sdk
COMPLETION_MODEL=

# 声明一个字符串模板
# 可以换行
# 描述细节需求
# 分步执行
# 输出的格式
prompt = """
Consideration product:工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿儿童水上玩具

1. Compose human readable product title used on Amazon in english within 20 words
2. Write 5 selling points for the products in Amazon
3. Evaluat a price range for this product in U.S

Output the result in json format tirh three properties called title,
selling_points and price_range
"""
#定义一个函数
def get_response(prompt):
    completions = openai.Completion.create(
        engine=COMPLETION_MODEL, #选择模型
        prompt=prompt,  #提示词
        max_tokens=512, #可以省点钱
        n=1, #1条
        stop=None,
        temperature=0.0  #自由发挥度 0-2
    )

    message = completions.choice[0].text #
    return message

print(get_response(prompt))


{
    title : "",
    selling_points:"",
    price_range:,
}