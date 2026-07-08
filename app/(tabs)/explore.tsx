import React from 'react';
import {
  Image // Mantido para renderizar as fotos locais
  ,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Dados dinâmicos das categorias com suas respectivas imagens locais
// Altere os caminhos dentro do require de acordo com as pastas do seu projeto
const CATEGORIAS = [
  { id: '1', label: 'Romance', image: require('@/assets/images/marin.png') },
  { id: '2', label: 'Ação', image: require('@/assets/images/images (4).png') },
  { id: '3', label: 'Aventura', image: require('@/assets/images/frieren.jpg') },
  { id: '4', label: 'Shoujo', image: require('@/assets/images/nana.jpg') },
];

// Dados dinâmicos dos livros/mangás mais lidos com imagens locais
const MAIS_LIDOS = [
  { id: '1', image: require('@/assets/images/images (1).png') },
  { id: '2', image: require('@/assets/images/Mushoku_Tensei_1.png') },
  { id: '3', image: require('@/assets/images/81Q6apsioXL.jpg') }, 
];

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Barra de Busca */}
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Buscar" 
            placeholderTextColor="#8E8E93"
          />
        </View>

        {/* Botões de Filtro / Tags */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.tagsContainer}
        >
          {['Favoritos', 'Histórico', 'Seguindo', 'Pedidos'].map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tagButton}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Banner Carrossel */}
        <View style={styles.bannerContainer}>
          {/* Alterado para carregar uma imagem local */}
          <Image 
            source={require('@/assets/images/image-107-1024x576.png')} 
            style={styles.banner} 
          />
          {/* Indicadores de Página (Dots) */}
          <View style={styles.dotsContainer}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <View 
                key={index} 
                style={[styles.dot, index === 0 ? styles.dotActive : styles.dotInactive]} 
              />
            ))}
          </View>
        </View>

        {/* Seção Categorias */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <TouchableOpacity style={styles.arrowCircle}>
            <Text style={styles.arrowText}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Categorias Circulares */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesList}
        >
          {CATEGORIAS.map((item) => (
            <View key={item.id} style={styles.categoryItem}>
              {/* Alterado de {{ uri }} para receber a referência local diretamente */}
              <Image 
                source={item.image} 
                style={styles.categoryCircle} 
              />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Seção Mais Lidos */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mais Lidos</Text>
          <TouchableOpacity style={styles.arrowCircle}>
            <Text style={styles.arrowText}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Mais Lidos (Cards Retangulares) */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.mostReadList}
        >
          {MAIS_LIDOS.map((item) => (
            /* Alterado para renderizar o caminho local sem a tag uri */
            <Image 
              key={item.id}
              source={item.image} 
              style={styles.cardRectangle} 
            />
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7A7A', 
    paddingTop: 16,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    height: 44,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  tagsContainer: {
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 24,
  },
  tagButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    resizeMode: 'cover', 
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 12,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    backgroundColor: '#FFFFFF',
  },
  dotInactive: {
    backgroundColor: '#FFFFFF60',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowCircle: {
    backgroundColor: '#72A9A9',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#3D7A7A',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriesList: {
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
    width: 76,
  },
  categoryCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  categoryLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  mostReadList: {
    paddingHorizontal: 16,
    gap: 16,
    paddingBottom: 24,
  },
  cardRectangle: {
    width: 150,
    height: 220,
    borderRadius: 4,
    resizeMode: 'cover',
  },
});
