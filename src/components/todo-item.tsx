import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskTextContainer}
        onPress={() => onToggle(id)}
      >
        <Ionicons
          name={completed ? "checkbox" : "square-outline"}
          size={22}
          color={completed ? "#4CAF50" : "#888"}
          style={{ marginRight: 10 }}
        />
        <Text
          style={[
            styles.taskText,
            completed && styles.completedTaskText,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onToggle(id)}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={completed ? '#4CAF50' : '#ccc'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onDelete(id)}
          style={{ marginLeft: 15 }}
        >
          <Ionicons name="trash" size={24} color="#ff5252" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  taskTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
