import { onMounted, ref } from 'vue';
import { getRandomName } from '@/api/getRandomName'

export const useRandomWord = () => {
    const word = ref('')
    const getRandomWord = async () => {
        try {
            word.value = await getRandomName()
        } catch(err) {
            console.log(err)
            word.value = ''
        }
    }

    onMounted(() => {
        getRandomWord()
    })

    return {
        word,
        getRandomWord
    }
}