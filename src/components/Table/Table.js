import PageTable from './PageTable';

import { ExportToExcelButton } from '../Table/ExportToExcel/ExportToExcel';

const Table=()=>{
    return(
        <div className='pt-5'>
            {/* <ExportToExcelButton className='col-lg-12'/> */}
            <h2 className='text-center'>Overall Report with detailed comments</h2>
            
            <PageTable/>
        </div>
        
    )
}

export default Table