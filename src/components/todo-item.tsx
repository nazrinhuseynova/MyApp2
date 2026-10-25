import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskTextContainer}
        onPress={() => onToggle(id)}
      >
        <Ionicons
          name={completed ? "checkbox" : "square-outline"}
          size={22}
          color={completed ? "#4CAF50" : "#888"}
          style={{ marginRight: Spacing.two }}
        />
        <ThemedText
          style={[
            styles.taskText,
            completed && styles.completedTaskText,
          ]}
        >
          {text}
        </ThemedText>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onToggle(id)}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={completed ? '#4CAF50' : '#888'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onDelete(id)}
          style={{ marginLeft: Spacing.three }}
        >
          <Ionicons name="trash" size={24} color="#ff5252" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.2)',
  },
  taskTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
