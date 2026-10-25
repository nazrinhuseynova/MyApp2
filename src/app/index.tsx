import * as Device from 'expo-device';
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { TodoItem } from '@/components/todo-item';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

 
  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('Diqqət', 'Zəhmət olmasa tapşırıq daxil edin!');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Todo List
          </ThemedText>
        </ThemedView>

        
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Yeni tapşırıq yazın..."
            placeholderTextColor="#888"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </ThemedView>

        
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              id={item.id}
              text={item.text}
              completed={item.completed}
              onToggle={toggleTaskCompletion}
              onDelete={deleteTask}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 100,
    paddingHorizontal: Spacing.four,
    gap: Spacing.two,
  },
  title: {
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: Spacing.two,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.2)',
  },
  addButton: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.two,
    borderRadius: Spacing.two,
  },
  listContainer: {
    alignSelf: 'stretch',
    paddingBottom: Spacing.four,
    gap: Spacing.two,
  },
});

