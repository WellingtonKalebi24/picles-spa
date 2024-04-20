interface IFilterColumns {
    name: 'gender' | 'size' | 'type'
    title: string
    options: { value: string; text: string }[]
  }
  
  export const filterColumns: IFilterColumns[] = [
    {
      name: 'type',
      title: 'Espécie',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Dog',
          text: 'Cachorros',
        },
        {
          value: 'Cat',
          text: 'Gatos',
        },
      ],
    },
    {
      name: 'size',
      title: 'Porte',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Small',
          text: 'Pequeno',
        },
        {
          value: 'Medium',
          text: 'Médio',
        },
        {
          value: 'Big',
          text: 'Grande',
        },
      ],
    },
    {
      name: 'gender',
      title: 'Sexo',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Femele',
          text: 'Fêmea',
        },
        {
          value: 'macho',
          text: 'Macho',
        },
      ],
    },
  ]