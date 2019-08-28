<style lang="scss">
    a.contact{
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 10px;
        width: 250px;
        text-align: center;
        margin: 15px;
        display: inline-block;

        span.name{
            display: block;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 15px;
            color: red;
        }

        span.email{
            display: block;
            font-size: 16px;
            text-align: center;
            margin-bottom: 15px;
        }

        span.phone{
            display: block;
            font-size: 14px;
        }
    }
</style>
<template>
    <router-link :to="'/contacts/'+contact.id" class="contact">
        <span class="name">{{ contact.first_name }} {{ contact.last_name }}</span>
        <span class="email">{{ contact.email }}</span>
        <span class="phone">{{ contact.phone }}</span>
    </router-link>
</template>

<script>
export default {
    props: ['contact']
}
</script>