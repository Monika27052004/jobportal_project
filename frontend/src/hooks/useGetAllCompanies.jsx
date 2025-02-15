// import { setCompanies} from '@/redux/companySlice'
// import { COMPANY_API_END_POINT} from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// // import { setCompanies } from '@/redux/companySlice';
// // import axios from 'axios';
// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';



// const useGetAllCompanies = () => {
//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         const fetchCompanies = async () => {
//             try {
//                 const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
//                 console.log('called');
//                 if (res.data.success) {
//                     dispatch(setCompanies(res.data.companies));
//                 }
//             } catch (error) {
//                 console.error("Error fetching companies:", error);
//             }
//         };
//         fetchCompanies();
//     }, [dispatch]);
// };

// export default useGetAllCompanies;


// const useGetAllCompanies = () => {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         const fetchCompanies = async () => {
//             try {
//                 const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
//                 console.log('called');
//                 if(res.data.success){
//                     dispatch(setCompanies(res.data.companies));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchCompanies();
//     },[])
// }

// export default useGetAllCompanies
import { setCompanies } from '@/redux/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
                console.log('called');
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies(); // Only fetch companies when the hook is first called
    }, [dispatch]); // Ensure effect runs on first render
};

export default useGetAllCompanies;

