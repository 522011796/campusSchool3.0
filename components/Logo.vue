<template>
  <div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
  </div>
</template>

<script>
import formCreate from "@form-create/element-ui";
export default {
  data(){
    return {
      fApi:{},
      options:{
        onSubmit: (formData)=>{
          alert(JSON.stringify(formData))
        },
      },
      rule:[
        formCreate.maker.input('title','field','value').props({disabled:true}),
      ]
    }
  }
}
</script>
