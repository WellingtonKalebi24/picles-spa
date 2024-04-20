<<<<<<< HEAD
import { GetPetsRequest, GetPetsResponse } from '../../interfaces/pets';
import httpClient from '../api/httpClient';


export async function getPets(params?: GetPetsRequest): Promise<GetPetsResponse> {
    try {
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await httpClient.get('/pet', {params})   
        
        return response.data
    } catch (error) {
        console.log('ERRO ao buscar pets e dogs', error);
        throw error
    }

}
=======
import { GetPetsRequest, GetPetsResponse } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function getPets(
  params?: GetPetsRequest
): Promise<GetPetsResponse> {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await httpClient.get('/pet', { params })

    return response.data
  } catch (error) {
    console.log('Erro ao buscar pets', error)
    throw error
  }
}
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
