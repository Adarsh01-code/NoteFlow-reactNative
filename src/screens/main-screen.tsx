import React, {useCallback , useState} from 'react'
import { Pressable } from 'react-native' 
import {Text,Icon, Box, Center,VStack, themeTools, useTheme, useColorMode,Fab, useColorModeValue} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'
import {AntDesign} from '@expo/vector-icons'
import shortid from 'shortid'
import TaskList from '../components/task-list'
import AnimatedColorBox from '../components/animated-color-box'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'


const initialData = [
    {
      id: shortid.generate(),
      subject: 'Click on "+" to add tasks',
      done: true
    },
    {
      id: shortid.generate(),
      subject: 'Swipe Left to remove tasks',
      done: false
    }
  ]


export default function MainScreen() {
    const [data,setData] = useState(initialData)
    const [editingItemId, setEditingItemId] = useState<string | null>(null)


    const handleToggleTaskItem = useCallback((item: any) => {
        setData(prevData => {
          const newData = [...prevData]
          const index = prevData.indexOf(item)
          newData[index] = {
            ...item,
            done: !item.done
          }
          return newData
        })
      }, [])

      const handleChangeTaskItemSubject = useCallback((item:any, newSubject: string) => {
        setData(prevData => {
          const newData = [...prevData]
          const index = prevData.indexOf(item)
          newData[index] = {
            ...item,
            subject: newSubject
          }
          return newData
        })
      }, [])

      const handleFinishEditingTaskItem = useCallback((_item:any) => {
        setEditingItemId(null)
      }, [])

      const handlePressTaskItemLabel = useCallback((item: any) => {
        setEditingItemId(item.id)
      }, [])

      const handleRemoveItem = useCallback((item:any) => {
        setData(prevData => {
          const newData = prevData.filter(i => i !== item)
          return newData
        })
      }, [])


    return(
        <AnimatedColorBox 
            flex={1}
            bg={useColorModeValue('warmGray.50','primary.900')}
            w="full"
            
            >
        
        <Masthead title="Your Tasks ->" image={require('../assets/TaskFlowLogo.png')} >

          <NavBar />

        </Masthead>

        <VStack 
        space={1}
        flex={1} 
        bg={useColorModeValue('warmGray.50','primary.900')}
        mt="-20px" 
        borderTopLeftRadius="20px" 
        borderTopRightRadius="20px" 
        pt="20px"
        >
            <TaskList
            data={data}
            onToggleItem={handleToggleTaskItem}
            onChangeSubject={handleChangeTaskItemSubject}
            onFinishEditing={handleFinishEditingTaskItem}
            onPressLabel={handlePressTaskItemLabel}
            onRemoveItem={handleRemoveItem}
            editingItemId={editingItemId}
        />
        

        </VStack>
        <Fab 
        position="absolute" 
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />}  size="lg" />}
        colorScheme={useColorModeValue('blue','darkBlue')}
        bg={useColorModeValue('blue.500','blue.400')}
        onPress={()=> {
            const id=shortid.generate()
            setData([
                {
                    id,
                    subject: ' ',
                    done:false
                },
                ...data
            ])
            setEditingItemId(id)
        }}
        />

    </AnimatedColorBox>
    )
}




