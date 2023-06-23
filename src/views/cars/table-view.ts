import {computed} from 'vue';
export const useTableView = () => {

  const props = defineProps<{
    page:number,
    itemsPerPage:number,

  }>()

  const emit = defineEmits<{(e:'update:page', value:number)}>();

  const page = computed<number>(
    {
      set(value: number){
        emit('update:page', value)
      }
      ,get():number{
        return props.page;
      }
    }
  )

  return {page,props,emit};

}
