<template>
    <div class="flex justify-center items-center gap-12 h-screen bg-gray-100">
     <div>
        <h1 class="text-primary font-bold text-6xl font-body">facebook</h1>
        <p class="text-black text-3xl pr-10 pt-1 font-normal font-body" >Facebook helps you connect and share <br> with the people in your life</p>
     </div>
     <div class="flex justify-center flex-col items-center">
        <div class="border border-white rounded-lg shadow-md shadow-gray-400 pt-4 pl-3 pr-3 pb-5 bg-white">
        <input type="text" placeholder="Email address or phone number" id="email" class="w-full border border-gray-200 rounded-lg pt-3 pb-3 pl-2  outline-blue-200">
        <input type="password" name="" id="" placeholder="Password" class="w-full border border-gray-200 rounded-lg pt-3 pb-3 pl-2 outline-blue-200 mt-3">
        <div class="w-full border bg-primary text-white text-center pt-3 pb-3 rounded-lg mt-3 font-bold cursor-pointer text-xl">Log in</div>
        <div class="text-primary text-center pt-2 cursor-pointer">Forgotten Password?</div>
        <div class="flex justify-center pt-4 border-t mt-4">
        <div class="text-white bg-secondary pt-2 pl-3 pr-3 pb-2 mt-2 border rounded-lg font-bold">Create new account</div>
        </div>
        </div>
        <div class="pt-6">
            <p><strong>Create a Page</strong> for a celebrity,brand or business</p>
        </div>
     </div>
    </div>
</template>
<script>


export default{
    data() {
      return{

      }  
    },
}
</script>
