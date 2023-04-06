import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.fullName.toLowerCase().includes(searchText) || it.grade.name.toLowerCase().includes(searchText)
        });
    }
}