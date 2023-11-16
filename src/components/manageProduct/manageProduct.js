import { Box, Flex } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import { useState } from 'react';
import HeadManageProduct from './headManage';

const BodyManageProduct = () => {
    const [selectAll, setSelectAll] = useState(false);
    
    return (
        <Box>
            <Flex display="row" w="auto" height="58px" >
            <HeadManageProduct />
            </Flex>
            <TableContainer>
                <Table size='sm' variant='striped' bgColor='#FFF6F3' >
                <Thead bgColor='#1A72DD' h='40px'>
                    <Tr >
                        <Th color='#ffffff'>Product Name</Th> 
                        <Th color='#ffffff'>Product Image</Th>
                        <Th color='#ffffff'>Price</Th>
                        <Th color='#ffffff'>Stock</Th>
                        <Th color='#ffffff'>Category</Th>
                        <Th color='#ffffff' textAlign='center'>Status</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px'>
                    <Tr>
                        <Td >Fried Rice</Td>
                        <Td><Box bgColor='#D1D1D1' w='100px' h='60px'/></Td>
                        <Td >Rp 50.000</Td>
                        <Td >100</Td>
                        <Td >Main Course</Td>
                        <Td textAlign='center'><Switch colorScheme='green'/></Td>
                        <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#1A72DD' color='#ffffff'>Edit</Button> <Button size='sm' w='50px' variant='outline' color='#1A72DD' border='1px solid #1A72DD'>Delete</Button></Box></Td>
                    </Tr>
                    <Tr>
                        <Td>Fried Rice</Td>
                        <Td><Box bgColor='#D1D1D1' w='100px' h='60px'/></Td>
                        <Td>Rp 50.000</Td>
                        <Td>100</Td>
                        <Td>Main Course</Td>
                        <Td textAlign='center'><Switch colorScheme='green'/></Td>
                        <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#1A72DD' color='#ffffff'>Edit</Button> <Button size='sm' w='50px' variant='outline' color='#1A72DD' border='1px solid #1A72DD'>Delete</Button></Box></Td>
                    </Tr>
                    
                </Tbody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BodyManageProduct;