<template>
    <div class="footer">
        <ul>
            <li> <a href="#">关于我们</a></li>
            <li> <a href="#">联系我们</a></li>
            <li> <a href="#">商务合作</a> </li>
            <li> <a href="#">帮助中心</a> </li>
            <li>  <a href="#">意见反馈</a> </li>
            <li> <a href="#">新手指南</a> </li>
        </ul>
        <p>Copyright © just-edu.com版权所有 | 苏ICP备888xxx88号-1</p>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 128px;
        background: #25292e;
        color: #fff;
    }

    .footer ul {
        margin: 0 auto 16px;
        padding-top: 38px;
        width: 810px;
    }

    .footer ul li {
        float: left;
        width: 112px;
        margin: 0 10px;
        text-align: center;
        font-size: 14px;
    }
    
    .footer ul li a {
        color: white;
        text-decoration: none;
    }

    .footer ul li a:hover {
        color: rgb(153, 169, 238);
    }

    .footer ul::after {
        content: "";
        display: block;
        clear: both;
    }

    .footer p {
        text-align: center;
        font-size: 12px;
    }


</style>