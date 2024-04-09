import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
FPS = 60

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
YELLOW = (255, 255, 0)

# Initialize game window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Pac-Man")

# Initialize clock
clock = pygame.time.Clock()

# Pac-Man properties
pacman_radius = 20
pacman_pos = [WIDTH // 2, HEIGHT // 2]
pacman_speed = 5

# Ghost properties
ghost_radius = 20
ghost_speed = 3
ghosts = [{'pos': [random.randint(50, WIDTH - 50), random.randint(50, HEIGHT - 50)],
           'direction': random.choice(['left', 'right', 'up', 'down'])} for _ in range(3)]

# Pellet properties
pellet_radius = 5
pellets = [{'pos': [random.randint(50, WIDTH - 50), random.randint(50, HEIGHT - 50)]} for _ in range(20)]

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()
    pacman_pos[0] += (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * pacman_speed
    pacman_pos[1] += (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * pacman_speed

    # Update ghosts
    for ghost in ghosts:
        if ghost['direction'] == 'left':
            ghost['pos'][0] -= ghost_speed
        elif ghost['direction'] == 'right':
            ghost['pos'][0] += ghost_speed
        elif ghost['direction'] == 'up':
            ghost['pos'][1] -= ghost_speed
        elif ghost['direction'] == 'down':
            ghost['pos'][1] += ghost_speed

        # Check for collisions with walls and change direction
        if ghost['pos'][0] < 0 or ghost['pos'][0] > WIDTH or ghost['pos'][1] < 0 or ghost['pos'][1] > HEIGHT:
            ghost['direction'] = random.choice(['left', 'right', 'up', 'down'])

    # Check for collisions with pellets
    for pellet in pellets:
        if pygame.Rect(pacman_pos[0], pacman_pos[1], 2 * pacman_radius, 2 * pacman_radius).colliderect(
                pygame.Rect(pellet['pos'][0] - pellet_radius, pellet['pos'][1] - pellet_radius,
                            2 * pellet_radius, 2 * pellet_radius)):
            pellets.remove(pellet)

    # Update screen
    screen.fill(BLACK)

    pygame.draw.circle(screen, YELLOW, pacman_pos, pacman_radius)

    for ghost in ghosts:
        pygame.draw.circle(screen, WHITE, ghost['pos'], ghost_radius)

    for pellet in pellets:
        pygame.draw.circle(screen, WHITE, pellet['pos'], pellet_radius)

    pygame.display.flip()

    # Cap the frame rate
    clock.tick(FPS)

# Quit Pygame
pygame.quit()
sys.exit()
