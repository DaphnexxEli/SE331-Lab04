<template>
<div v-if="event">
    <h1>{{event.title}}</h1>
    <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
    <p> {{event.description}}</p>
</div>
</template>
<script>
import EventService from '@/services/EventService'
// import { create } from 'domain'
// import { response } from 'express'

export default{
    prop: ['id'],
    data(){
        return{
            event: null,
            
        }
    },
    create(){
        EventService.getEvent (this.id)
        .then(response => {
            this.event = response.data
        })
        .catch(error =>{
            console.log(error)
        })

    }
}
</script>